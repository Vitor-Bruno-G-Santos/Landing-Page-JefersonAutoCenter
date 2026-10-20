"use client";
import React from 'react';
import { Wrench, CheckCircle2 } from 'lucide-react';
import ServiceCard from '../molecules/ServiceCard';

const DEFAULT_SPECIALTIES = [
  'Alinhamento 3D e Balanceamento',
  'Freios, Discos e Pastilhas',
  'Suspensão e Amortecedores',
  'Troca de Óleo de Câmbio Automático',
  'Embreagem, Correias e Tensores',
  'Sistema de Arrefecimento'
];

export default function ServicesPricingOrganism({ 
  whatsappLink = '#',
  units = [],
  services = [],
  servicesTitle = '',
  servicesSubtitle = '',
  specialties = DEFAULT_SPECIALTIES
}) {
  const displaySpecialties = specialties && specialties.length > 0 ? specialties : DEFAULT_SPECIALTIES;

  return (
    <section id="servicos" className="bg-[#001744] py-16 md:py-20 px-4 border-t border-blue-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#ffcc00] bg-[#001f5c] border border-blue-800 px-3 py-1 rounded-full mb-3">
            <Wrench className="w-3.5 h-3.5 text-[#ffcc00]" />
            Catálogo de Manutenção
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-white">
            {servicesTitle}
          </h2>
          <p className="text-gray-400 mt-2">{servicesSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {services.map((s, idx) => (
            <ServiceCard key={idx} {...s} whatsappLink={whatsappLink} units={units} />
          ))}
        </div>

        <div className="mt-12 bg-[#001f5c] border border-blue-800/80 rounded-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
            <div>
              <h3 className="text-lg font-extrabold text-white">
                Outras Especialidades Realizadas nas 2 Unidades
              </h3>
              <p className="text-gray-300 text-sm">
                Atendemos veículos nacionais e importados com equipamentos de diagnóstico atualizados:
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {displaySpecialties.map((item, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-2 bg-[#001744] text-gray-100 border border-blue-800/80 px-3.5 py-2 rounded-xl text-sm font-semibold"
              >
                <CheckCircle2 className="w-4 h-4 text-[#ffcc00]" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


