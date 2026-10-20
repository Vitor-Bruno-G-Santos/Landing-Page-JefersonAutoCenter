"use client";
import React from 'react';
import Badge from '../atoms/Badge';
import StarRating from '../atoms/StarRating';
import WhatsAppModalOrganism from './WhatsAppModalOrganism';
import { MapPin, Clock, CheckCircle2 } from 'lucide-react';

export default function HeroOrganism({ 
  whatsappLink = '#',
  units = [],
  differentials = { title: '', items: [] },
  company = { badge: '', tagline: '', description: '', rating: { score: '', reviewsCount: '' }, contact: { phone: '' } },
  cta = { primary: '' },
  socialProof = { showRating: false, text: '' }
}) {
  return (
    <section className="relative bg-gradient-to-b from-[#002d80] via-[#002266] to-[#001f5c] py-16 md:py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LADO ESQUERDO: COPYWRITING */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-6">
          <Badge icon={MapPin}>{company.badge || '2 Unidades: Salgado Filho e Júlio de Castilho'}</Badge>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            {company.tagline.split('Campo Grande')[0]}<span className="text-[#ffcc00]">Campo Grande</span>{company.tagline.split('Campo Grande')[1]}
          </h1>

          <p className="text-base sm:text-lg text-gray-200 font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            {company.description}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <WhatsAppModalOrganism
              units={units}
              buttonLabel={cta.primary}
              variant="primary"
              size="lg"
              className="shadow-2xl"
              iconClassName="w-6 h-6 mr-3"
            />
          </div>

          {/* PROVA SOCIAL E DIFERENCIAIS */}
          <div className="pt-6 border-t border-blue-800/50 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-300">
            {socialProof.showRating && (
              <div className="flex items-center gap-2">
                <StarRating count={5} />
                <span className="font-bold text-white">{company.rating.score}</span> ({company.rating.reviewsCount} avaliações)
              </div>
            )}
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#ffcc00]" />
              <span>{socialProof.text}</span>
            </div>
          </div>
        </div>

        {/* LADO DIREITO: FOTO DA OFICINA E DIFERENCIAIS */}
        <div className="lg:col-span-5 relative">
          <div className="relative bg-[#001f5c] border border-blue-800/80 rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative h-64 sm:h-72 w-full bg-[#001744]">
              <img
                src="/images/oficina-hero.jpg"
                alt="Estrutura e diagnóstico automotivo no Jeferson Autocenter em Campo Grande"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001f5c] via-transparent to-black/30" />
              <span className="absolute top-4 right-4 bg-[#ffcc00] text-gray-900 text-xs font-black px-3.5 py-1.5 rounded-full uppercase shadow-md">
                Orçamento Transparente
              </span>
            </div>

            <div className="p-6 space-y-3">
              <h2 className="text-lg font-extrabold text-white">{differentials.title}</h2>
              <ul className="space-y-2.5 text-sm text-gray-200">
                {differentials.items.map((item, index) => (
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
