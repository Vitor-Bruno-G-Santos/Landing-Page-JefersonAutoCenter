"use client";
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import ServiceCard from '../molecules/ServiceCard';
import { highlightBrand } from '../../utils/highlightBrand';

export default function ServicesPricingOrganism({ 
  whatsappLink = '#',
  units = [],
  services = [],
  servicesTitle = '',
  servicesSubtitle = '',
  priceDisclaimer = '',
  specialties = []
}) {
  return (
    <section id="servicos" className="bg-[#001744] py-16 md:py-20 px-4 border-t border-blue-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black text-white">
            {highlightBrand(servicesTitle)}
          </h2>
          <p className="text-gray-200 text-base mt-2">{servicesSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {services.map((s, idx) => (
            <ServiceCard key={idx} {...s} whatsappLink={whatsappLink} units={units} />
          ))}
        </div>

        {priceDisclaimer && (
          <p className="text-sm text-gray-300 mt-4 text-center max-w-3xl mx-auto">
            {priceDisclaimer}
          </p>
        )}

        <div className="mt-14 bg-[#001f5c] border border-blue-800/80 rounded-3xl p-6 md:p-8">
          <div className="mb-6">
            <h3 className="text-xl md:text-2xl font-extrabold text-white">
              Outras especialidades realizadas nas 2 unidades
            </h3>
            <p className="text-gray-200 text-base mt-1">
              Atendemos veículos nacionais, importados e utilitários com diagnóstico computadorizado:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {specialties.map((item, idx) => {
              const isObject = typeof item === 'object' && item !== null;
              const title = isObject ? item.title : item;
              const desc = isObject ? item.desc : '';
              return (
                <div
                  key={idx}
                  className="bg-[#001744] border border-blue-800/80 rounded-2xl p-4 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#ffcc00] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-base font-bold text-white">{title}</h4>
                    {desc && <p className="text-sm text-gray-300 mt-1 leading-relaxed">{desc}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
