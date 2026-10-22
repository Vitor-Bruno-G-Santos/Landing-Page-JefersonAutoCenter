"use client";
import React, { useState, useEffect, useRef } from 'react';
import StarRating from '../atoms/StarRating';
import WhatsAppModalOrganism from './WhatsAppModalOrganism';
import { Phone } from 'lucide-react';
import { highlightBrand } from '../../utils/highlightBrand';
import { assetUrl } from '../../utils/assetPath';

export default function HeroOrganism({ 
  whatsappLink = '#',
  units = [],
  differentials = {},
  company = {},
  contact = {},
  cta = {},
  socialProof = {}
}) {
  const [videoSrc, setVideoSrc] = useState('');
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const loadVideo = () => {
      const schedule = typeof window !== 'undefined' && 'requestIdleCallback' in window
        ? window.requestIdleCallback
        : (cb) => setTimeout(cb, 1000);

      schedule(() => {
        const url = assetUrl("videos/hero_video.mp4");
        setVideoSrc(url);
        if (videoRef.current) {
          videoRef.current.load();
          videoRef.current.play().catch(() => {});
        }
      });
    };

    if (document.readyState === 'complete') {
      loadVideo();
    } else {
      window.addEventListener('load', loadVideo, { once: true });
      return () => window.removeEventListener('load', loadVideo);
    }
  }, []);

  const highlight = company.taglineHighlight || 'o que o carro precisa';
  const tagline = company.tagline || '';
  const parts = tagline.includes(highlight)
    ? tagline.split(highlight)
    : [tagline, ''];

  return (
    <section className="relative bg-gradient-to-b from-[#002d80] via-[#001f5c] to-[#001744] py-16 sm:py-24 md:py-28 lg:py-32 px-4 overflow-hidden">
      {/* Vídeo de fundo da oficina (sem som, loop contínuo) */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-b from-[#002d80] via-[#001f5c] to-[#001744]">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          onPlaying={() => setVideoReady(true)}
          onLoadedData={() => setVideoReady(true)}
          className={`w-full h-full object-cover object-center transition-opacity duration-1000 ${
            videoReady ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {videoSrc && <source src={videoSrc} type="video/mp4" />}
        </video>
        {/* Overlay translúcido para evidenciar o vídeo com boa nitidez quando estiver rodando */}
        <div
          className={`absolute inset-0 bg-[#001744]/40 transition-opacity duration-1000 ${
            videoReady ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* Esmaecimento na base para transição suave com a próxima seção */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#001f5c]" />
      </div>

      {/* Conteúdo centralizado */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight [text-wrap:balance]">
          {highlightBrand(parts[0])}
          {company.tagline?.includes(highlight) && (
            <span className="text-[#ffcc00]">{highlight}</span>
          )}
          {highlightBrand(parts[1])}
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-200 font-normal max-w-2xl mx-auto leading-relaxed">
          {company.description}
        </p>

        <div className="pt-2 flex flex-col sm:flex-row gap-3.5 justify-center items-center">
          <WhatsAppModalOrganism
            units={units}
            buttonLabel={cta.primary}
            variant="primary"
            size="lg"
            className="shadow-2xl w-full sm:w-auto"
            iconClassName="w-6 h-6 mr-2.5"
          />
          <a
            href="#unidades"
            className="w-full sm:w-auto inline-flex items-center justify-center font-bold rounded-xl px-6 py-4 text-base border-2 border-blue-400/50 text-white hover:border-[#ffcc00] hover:text-[#ffcc00] bg-[#001f5c]/70 hover:bg-[#001f5c] transition-all"
          >
            <Phone className="w-5 h-5 mr-2 text-[#ffcc00]" />
            <span>Ligar ou ver unidades</span>
          </a>
        </div>

        <div className="pt-5 border-t border-blue-800/50 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-200 max-w-md mx-auto">
          {socialProof.showRating && (
            <a href="#avaliacoes" className="flex items-center gap-2 hover:text-[#ffcc00] transition-colors">
              <StarRating count={5} />
              <span className="font-bold text-white">{company.rating.scoreFormatted || `${company.rating.score}/5`}</span>
              <span>({company.rating.reviewsCount} avaliações no Google)</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
