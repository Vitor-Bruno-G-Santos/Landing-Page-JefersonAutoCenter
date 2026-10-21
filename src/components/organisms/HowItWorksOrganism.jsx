"use client";
import React from 'react';
import { MessageSquare, Cpu, FileText, ShieldCheck } from 'lucide-react';
import WhatsAppModalOrganism from './WhatsAppModalOrganism';
import { highlightBrand } from '../../utils/highlightBrand';

export default function HowItWorksOrganism({
  howItWorks = {},
  units = [],
  ctaLabel = 'Agendar Diagnóstico pelo WhatsApp'
}) {
  const { title = '', subtitle = '', steps = [] } = howItWorks;
  const icons = [MessageSquare, Cpu, FileText, ShieldCheck];

  return (
    <section id="como-funciona" className="bg-gradient-to-b from-[#001744] via-[#001f5c] to-[#002d80] text-white py-16 md:py-20 px-4 section-divider-top">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-4xl font-black text-white">
            {highlightBrand(title)}
          </h2>
          <p className="text-gray-200 text-base md:text-lg mt-2">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {(steps || []).map((item, idx) => {
            const Icon = icons[idx] || ShieldCheck;
            return (
              <div
                key={idx}
                className="bg-[#001f5c] rounded-2xl p-6 border border-blue-800/80 hover:border-[#ffcc00]/60 transition-colors shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#ffcc00] text-gray-900 flex items-center justify-center shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-[#ffcc00]/80">
                      {item.step || `0${idx + 1}`}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-base text-gray-200 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
