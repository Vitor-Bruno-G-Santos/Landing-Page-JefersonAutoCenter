"use client";
import React from 'react';
import { Phone, ShieldCheck } from 'lucide-react';
import WhatsAppModalOrganism from './WhatsAppModalOrganism';
import { highlightBrand } from '../../utils/highlightBrand';

export default function FinalCTAOrganism({
  units = [],
  ctaLabel = 'Agendar Diagnóstico pelo WhatsApp'
}) {
  return (
    <section className="bg-gradient-to-b from-[#001f5c] via-[#001b50] to-[#001744] py-16 px-4 section-divider-top">
      <div className="max-w-4xl mx-auto text-center space-y-6 bg-[#001744]/90 border-2 border-[#ffcc00]/60 rounded-3xl p-8 md:p-12 shadow-2xl">
        <div className="inline-flex items-center gap-2 text-sm font-bold text-[#ffcc00]">
          <ShieldCheck className="w-5 h-5" />
          <span>Diagnóstico computadorizado + 90 dias de garantia por escrito</span>
        </div>

        <h2 className="text-2xl md:text-4xl font-black text-white [text-wrap:balance]">
          {highlightBrand('Pronto para fazer a manutenção do seu carro sem surpresas no orçamento?')}
        </h2>

        <p className="text-gray-200 text-base md:text-lg max-w-2xl mx-auto">
          Fale agora com a unidade mais próxima pelo WhatsApp ou telefone e agende a avaliação técnica do seu veículo.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <WhatsAppModalOrganism
            units={units}
            buttonLabel={ctaLabel}
            variant="primary"
            size="lg"
            iconClassName="w-6 h-6 mr-2.5"
          />
        </div>

        <div className="pt-4 border-t border-blue-900/70 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-200">
          {units.map((u, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#ffcc00]" />
              <span className="font-bold text-white">{u.shortName}:</span>
              <a
                href={`tel:${u.primaryTel || '+556730254562'}`}
                className="hover:text-[#ffcc00] underline font-semibold"
              >
                {(u.phone || '').split('|')[0].trim()}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
