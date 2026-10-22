"use client";
import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';
import WhatsAppModalOrganism from './WhatsAppModalOrganism';
import { highlightBrand } from '../../utils/highlightBrand';

export default function PainPointsOrganism({ 
  painPoints = {},
  units = [],
  ctaLabel = 'Agendar Diagnóstico pelo WhatsApp'
}) {
  const {
    title = '',
    subtitle = '',
    comparisons = [],
    solutionTitle = '',
    solutionDesc = ''
  } = painPoints;
  const pairs = comparisons || [];

  return (
    <section className="bg-gradient-to-b from-[#001f5c] to-[#001744] py-16 md:py-20 px-4 section-divider-top">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-black text-white">
            {highlightBrand(title)}
          </h2>
          <p className="text-gray-200 text-base mt-2">{subtitle}</p>
        </div>

        <div className="hidden md:grid md:grid-cols-2 gap-6 mb-4 px-4">
          <div className="text-rose-300 font-bold text-base flex items-center gap-2">
            <XCircle className="w-5 h-5 text-rose-400" />
            <span>Em oficinas sem transparência</span>
          </div>
          <div className="text-[#ffcc00] font-bold text-base flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#ffcc00]" />
            <span>{highlightBrand(solutionTitle || 'No Jeferson Autocenter')}</span>
          </div>
        </div>

        <div className="space-y-4 mb-10">
          {pairs.map((pair, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch"
            >
              <div className="bg-[#141824] border border-rose-400/25 rounded-md p-5 flex items-start gap-3.5 text-gray-200 text-base">
                <span className="bg-rose-500/15 text-rose-400 p-1.5 rounded-lg shrink-0 mt-0.5">
                  <XCircle className="w-5 h-5" />
                </span>
                <div>
                  <span className="md:hidden block text-xs font-bold text-rose-300 mb-1">
                    Problema comum
                  </span>
                  <span>{pair.pain}</span>
                </div>
              </div>

              <div className="bg-[#001f5c] border-2 border-[#ffcc00]/70 rounded-md p-5 flex items-start gap-3.5 text-white text-base shadow-lg">
                <span className="bg-[#ffcc00]/20 text-[#ffcc00] p-1.5 rounded-lg shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </span>
                <div>
                  <span className="md:hidden block text-xs font-bold text-[#ffcc00] mb-1">
                    No Jeferson Autocenter
                  </span>
                  <span>{pair.solution}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <WhatsAppModalOrganism
            units={units}
            buttonLabel={ctaLabel}
            variant="primary"
            size="lg"
            iconClassName="w-5 h-5 mr-2"
          />
        </div>
      </div>
    </section>
  );
}
