"use client";
import React from 'react';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { highlightBrand } from '../../utils/highlightBrand';

export default function AboutOrganism({ 
  about = {},
  company = {},
  units = []
}) {
  const { subtitle = '', title = '', values = [] } = about;
  const { name = '', fullDescription = '' } = company;
  const unitImages = [
    './images/unidade-salgado-filho.webp',
    './images/unidade-julio-castilho.webp'
  ];

  return (
    <section className="bg-[#001f5c] py-16 md:py-20 px-4 border-t border-blue-900/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* LADO ESQUERDO: HISTÓRIA E COMPROMISSO */}
        <div className="lg:col-span-6 space-y-5">
          <span className="inline-block bg-[#ffcc00]/15 text-[#ffcc00] border border-[#ffcc00]/30 font-black uppercase text-xs tracking-widest px-3 py-1 rounded-full">
            {subtitle}
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-white leading-tight">
            {highlightBrand(title.replace('{companyName}', name))}
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            {fullDescription}
          </p>

          <div className="space-y-3 pt-2">
            {(values || []).map((value, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#ffcc00] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-white text-sm md:text-base">{value.title}</h3>
                  <p className="text-xs md:text-sm text-gray-300">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LADO DIREITO: FOTOS REAIS DAS DUAS UNIDADES */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {(units.length > 0 ? units : [
            { name: 'Salgado Filho (Loja 1)', badge: 'Unidade 1', address: 'Av. Salgado Filho, 2057 - Vila Carvalho' },
            { name: 'Júlio de Castilho (Loja 2)', badge: 'Unidade 2', address: 'Av. Júlio de Castilho, 1636 - Vila Alba' }
          ]).map((unit, idx) => (
            <div
              key={idx}
              className="bg-[#001744] rounded-2xl overflow-hidden border border-blue-800/80 shadow-xl flex flex-col"
            >
              <div className="relative h-48 w-full bg-[#001233]">
                <img
                  src={unitImages[idx] || unitImages[0]}
                  alt={`Estrutura ${unit.name} - Jeferson Autocenter`}
                  width="400"
                  height="192"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute top-3 left-3 bg-[#ffcc00] text-gray-900 text-[11px] font-black px-2.5 py-1 rounded-full uppercase shadow">
                  {unit.badge}
                </span>
              </div>
              <div className="p-4 space-y-1.5">
                <h3 className="font-extrabold text-white text-base">{unit.name}</h3>
                <p className="text-xs text-gray-300 flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#ffcc00] shrink-0 mt-0.5" />
                  <span>{unit.address}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
