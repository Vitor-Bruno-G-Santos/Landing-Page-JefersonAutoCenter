"use client";
import React from 'react';
import { ExternalLink } from 'lucide-react';
import TestimonialCard from '../molecules/TestimonialCard';
import MetricCard from '../molecules/MetricCard';
import StarRating from '../atoms/StarRating';

const DEFAULT_GOOGLE_MAPS_URL =
  'https://maps.google.com/?q=Jeferson+Autocenter+Av.+Salgado+Filho,+2057+Campo+Grande+MS';

export default function TestimonialsOrganism({ 
  testimonials = [],
  metrics = [],
  testimonialsTitle = '',
  testimonialsSubtitle = '',
  rating = '4.7',
  totalReviews = '162',
  googleReviewsUrl = DEFAULT_GOOGLE_MAPS_URL
}) {

  return (
    <section id="avaliacoes" className="bg-[#002d80] py-16 md:py-20 px-4 border-t border-blue-900/50">
      <div className="max-w-7xl mx-auto">
        
        {/* MÉTRICAS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {metrics.map((metric, idx) => (
            <MetricCard key={idx} number={metric.number} label={metric.label} />
          ))}
        </div>

        {/* CABEÇALHO DEPOIMENTOS + SELO GOOGLE */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2.5 bg-[#001f5c] border border-blue-700/80 px-4 py-2 rounded-full mb-4 shadow-md">
            <span className="bg-white p-1 rounded-full">
              <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z" />
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z" />
                <path fill="#FBBC05" d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z" />
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z" />
              </svg>
            </span>
            <span className="text-white font-black text-sm">{rating}</span>
            <StarRating count={5} />
            <span className="text-xs text-gray-300 font-medium">• {totalReviews} avaliações no Google</span>
          </div>

          <h2 className="text-2xl md:text-4xl font-black text-white">
            {testimonialsTitle}
          </h2>
          <p className="text-gray-300 mt-2">{testimonialsSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} {...t} />
          ))}
        </div>

        {/* LINK PARA O GOOGLE MAPS */}
        <div className="mt-10 text-center">
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#001f5c] hover:bg-[#001744] text-white hover:text-[#ffcc00] border border-blue-700 hover:border-[#ffcc00] px-6 py-3 rounded-xl text-sm font-bold transition-all shadow-md"
          >
            <span>Ver avaliações diretamente no Google Maps</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}

