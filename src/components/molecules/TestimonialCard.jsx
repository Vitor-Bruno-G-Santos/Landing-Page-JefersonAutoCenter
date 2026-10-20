import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import StarRating from '../atoms/StarRating';

function GoogleLogo({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"
      />
    </svg>
  );
}

export default function TestimonialCard({
  name,
  role,
  date,
  comment,
  avatar,
  avatarColor = 'bg-blue-600',
  rating = 5
}) {
  const initials = (name || '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <div className="bg-[#001f5c] p-6 rounded-2xl border border-blue-800/80 shadow-xl flex flex-col justify-between hover:border-blue-600 transition-colors">
      <div>
        {/* CABEÇALHO ESTILO GOOGLE REVIEWS */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-11 h-11 rounded-full ${avatarColor} text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-inner ring-2 ring-white/15`}
            >
              {avatar ? (
                <img src={avatar} alt={name} className="w-full h-full rounded-full object-cover" />
              ) : (
                initials
              )}
            </div>
            <div>
              <h3 className="font-bold text-white text-sm leading-tight">{name}</h3>
              <p className="text-xs text-gray-300 mt-0.5">{role}</p>
            </div>
          </div>

          <div
            className="bg-white p-2 rounded-full shadow-sm shrink-0"
            title="Avaliação publicada no Google"
          >
            <GoogleLogo className="w-4 h-4" />
          </div>
        </div>

        {/* ESTRELAS + DATA */}
        <div className="flex items-center gap-2 mb-3">
          <StarRating count={rating} />
          {date && <span className="text-xs text-gray-400">• {date}</span>}
        </div>

        {/* TEXTO DO DEPOIMENTO */}
        <p className="text-gray-200 text-sm leading-relaxed mb-5">
          {comment}
        </p>
      </div>

      {/* RODAPÉ DE VERIFICAÇÃO GOOGLE */}
      <div className="flex items-center gap-1.5 border-t border-blue-800/70 pt-3 text-xs text-gray-300">
        <CheckCircle2 className="w-3.5 h-3.5 text-[#ffcc00] shrink-0" />
        <span>Avaliação publicada no Google</span>
      </div>
    </div>
  );
}

