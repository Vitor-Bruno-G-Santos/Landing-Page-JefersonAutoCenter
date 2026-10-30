import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";
import { assetUrl } from "../../utils/assetPath";

export default function BackgroundAudio({
  audioSrc = "audios/siteAudio.mpeg",
  initialVolume = 0.35,
}) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const resolvedSrc = assetUrl(audioSrc);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = initialVolume;
    audio.loop = true;

    let userCancelled = false;

    const playAudio = () => {
      if (userCancelled) return;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Se o navegador bloquear o autoplay inicial com som,
            // ativa assim que detectar QUALQUER movimento ou interação
            const triggerPlay = () => {
              if (userCancelled) return;
              audio
                .play()
                .then(() => setIsPlaying(true))
                .catch(() => {});
            };

            const events = [
              "click",
              "touchstart",
              "touchend",
              "pointerdown",
              "scroll",
              "wheel",
              "keydown",
            ];

            events.forEach((evt) => {
              window.addEventListener(evt, triggerPlay, {
                once: true,
                passive: true,
                capture: true,
              });
            });
          });
      }
    };

    // Tenta reproduzir imediatamente ao carregar
    playAudio();

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    return () => {
      userCancelled = true;
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.pause();
    };
  }, [initialVolume]);

  const togglePlay = (e) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    const nextMuted = !isMuted;
    audio.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={resolvedSrc}
        autoPlay
        playsInline
        preload="auto"
      />

      {/* Widget flutuante no canto inferior esquerdo */}
      <aside
        aria-label="Reprodutor de áudio de fundo"
        className="fixed bottom-20 md:bottom-6 left-4 md:left-6 z-40 flex items-center gap-2 bg-[#001744]/85 hover:bg-[#001744] backdrop-blur-md border border-white/15 hover:border-blue-400/50 text-white px-3.5 py-2 rounded-full shadow-2xl transition-all duration-300 group"
      >
        {/* Indicador de status/música */}
        <div className="flex items-center gap-1.5">
          <div className="relative flex items-center justify-center w-7 h-7 rounded-full bg-blue-600/30 text-blue-400 group-hover:text-blue-300">
            <Music className={`w-3.5 h-3.5 ${isPlaying && !isMuted ? "animate-pulse" : ""}`} />
          </div>

          {/* Equalizador animado em CSS puro */}
          {isPlaying && !isMuted ? (
            <span className="flex items-end gap-0.5 h-3.5 px-0.5" aria-hidden="true">
              <span className="w-0.5 bg-blue-400 rounded-full animate-[bounce_0.8s_infinite_alternate]" style={{ height: "60%" }}></span>
              <span className="w-0.5 bg-blue-400 rounded-full animate-[bounce_1.1s_infinite_alternate_0.2s]" style={{ height: "100%" }}></span>
              <span className="w-0.5 bg-blue-400 rounded-full animate-[bounce_0.9s_infinite_alternate_0.4s]" style={{ height: "40%" }}></span>
            </span>
          ) : null}
        </div>

        {/* Botão Play / Pause */}
        <button
          type="button"
          onClick={togglePlay}
          className="text-xs font-medium tracking-wide text-gray-200 hover:text-white px-1.5 py-1 rounded transition-colors cursor-pointer select-none"
          title={isPlaying ? "Pausar música" : "Tocar música"}
          aria-label={isPlaying ? "Pausar música de fundo" : "Tocar música de fundo"}
        >
          {isPlaying ? "Pausar" : "Tocar"}
        </button>

        <span className="w-px h-3.5 bg-white/15" aria-hidden="true" />

        {/* Botão Mute / Unmute */}
        <button
          type="button"
          onClick={toggleMute}
          className="p-1 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          title={isMuted ? "Ativar som" : "Desativar som"}
          aria-label={isMuted ? "Ativar som" : "Desativar som"}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-red-400" />
          ) : (
            <Volume2 className="w-4 h-4 text-blue-300" />
          )}
        </button>
      </aside>
    </>
  );
}
