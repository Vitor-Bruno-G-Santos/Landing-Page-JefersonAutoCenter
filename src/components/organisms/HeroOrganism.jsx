"use client";
import React from 'react';
import Badge from '../atoms/Badge';
import StarRating from '../atoms/StarRating';
import WhatsAppModalOrganism from './WhatsAppModalOrganism';
import { MapPin, ShieldCheck, CheckCircle2, Phone } from 'lucide-react';
import { highlightBrand } from '../../utils/highlightBrand';
import { assetUrl, assetSrcSet } from '../../utils/assetPath';

export default function HeroOrganism({ 
  whatsappLink = '#',
  units = [],
  differentials = {},
  company = {},
  contact = {},
  cta = {},
  socialProof = {}
}) {
  const { title: diffTitle = '', items: diffItems = [] } = differentials;
  const highlight = company.taglineHighlight || 'aprova cada item';
  const tagline = company.tagline || '';
  const parts = tagline.includes(highlight)
    ? tagline.split(highlight)
    : [tagline, ''];

  return (
    <section className="relative bg-gradient-to-b from-[#002d80] via-[#002266] to-[#001f5c] py-14 md:py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        <div className="lg:col-span-7 text-center lg:text-left space-y-6">
          <Badge icon={MapPin}>
            {company.badge || 'Oficina mecânica em Campo Grande - MS • 2 unidades próprias'}
          </Badge>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight [text-wrap:balance]">
            {highlightBrand(parts[0])}
            {company.tagline.includes(highlight) && (
              <span className="text-[#ffcc00] whitespace-nowrap">{highlight}</span>
            )}
            {highlightBrand(parts[1])}
          </h1>

          <p className="text-base sm:text-lg text-gray-200 font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            {company.description}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start">
            <WhatsAppModalOrganism
              units={units}
              buttonLabel={cta.primary}
              variant="primary"
              size="lg"
              className="shadow-2xl"
              iconClassName="w-6 h-6 mr-2.5"
            />
            <a
              href="#unidades"
              className="inline-flex items-center justify-center font-bold rounded-lg px-6 py-4 text-base border-2 border-blue-400/50 text-white hover:border-[#ffcc00] hover:text-[#ffcc00] bg-[#001f5c]/70 transition-all"
            >
              <Phone className="w-5 h-5 mr-2 text-[#ffcc00]" />
              <span>Ligar ou ver unidades</span>
            </a>
          </div>

          <div className="pt-5 border-t border-blue-800/50 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-200">
            {socialProof.showRating && (
              <a href="#avaliacoes" className="flex items-center gap-2 hover:text-[#ffcc00] transition-colors">
                <StarRating count={5} />
                <span className="font-bold text-white">{company.rating.scoreFormatted || `${company.rating.score}/5`}</span>
                <span>({company.rating.reviewsCount} avaliações no Google)</span>
              </a>
            )}
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#ffcc00]" />
              <span>{socialProof.text}</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative bg-[#001f5c] border border-blue-800/80 rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative h-60 sm:h-68 w-full bg-[#001744]">
              <img
                src={assetUrl("images/oficina-hero.webp")}
                srcSet={assetSrcSet("images/oficina-hero-540.webp 540w, images/oficina-hero.webp 640w")}
                sizes="(max-width: 640px) 100vw, 540px"
                alt="Diagnóstico automotivo no Jeferson Autocenter em Campo Grande - MS"
                width="640"
                height="427"
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001f5c] via-transparent to-black/25" />
            </div>

            <div className="p-6 space-y-3.5">
              <h2 className="text-lg font-extrabold text-white">{highlightBrand(diffTitle)}</h2>
              <ul className="space-y-2.5 text-base text-gray-200">
                {(diffItems || []).map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#ffcc00] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
