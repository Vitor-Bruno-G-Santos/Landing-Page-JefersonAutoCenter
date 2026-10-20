"use client";
import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';
import WhatsAppModalOrganism from './WhatsAppModalOrganism';

export default function PainPointsOrganism({ 
  painPoints = { title: '', subtitle: '', items: [], solutionTitle: '', solutionDesc: '' },
  units = []
}) {
  const standards = [
    "Orçamento detalhado com fotos e vídeos enviado no seu WhatsApp.",
    "Nenhum serviço ou troca de peça é feito sem a sua aprovação prévia.",
    "Diagnóstico técnico preciso com scanner para ir direto na causa do problema.",
    "Peças de primeira linha com garantia registrada na ordem de serviço."
  ];

  return (
    <section className="bg-[#001744] py-16 md:py-20 px-4 border-t border-blue-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-black text-white">
            {painPoints.title}
          </h2>
          <p className="text-gray-400 mt-2">{painPoints.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* COLUNA ESQUERDA: DORES COMUNS */}
          <div className="bg-[#141824] p-6 md:p-8 rounded-3xl border border-rose-400/25 shadow-xl flex flex-col justify-between">
            <div>
              <span className="inline-block bg-rose-500/15 text-rose-300 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-rose-400/30 mb-4">
                O que você evita aqui
              </span>
              <h3 className="text-xl md:text-2xl font-extrabold text-white mb-6">
                Problemas comuns ao levar o carro em oficinas sem transparência
              </h3>
              <ul className="space-y-3">
                {painPoints.items.map((pain, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 bg-white/[0.04] border border-white/[0.07] rounded-2xl p-3.5 text-slate-200 text-sm md:text-base"
                  >
                    <span className="bg-rose-500/15 text-rose-400 p-1 rounded-lg shrink-0 mt-0.5">
                      <XCircle className="w-4 h-4" />
                    </span>
                    <span>{pain}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* COLUNA DIREITA: PADRÃO JEFERSON AUTOCENTER */}
          <div className="bg-[#001f5c] p-6 md:p-8 rounded-3xl border-2 border-[#ffcc00] shadow-xl flex flex-col justify-between">
            <div>
              <span className="inline-block bg-[#ffcc00]/20 text-[#ffcc00] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#ffcc00]/40 mb-4">
                Padrão Jeferson Autocenter
              </span>
              <h3 className="text-xl md:text-2xl font-black text-white mb-3">
                {painPoints.solutionTitle}
              </h3>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                {painPoints.solutionDesc}
              </p>
              <ul className="space-y-3.5 mb-8">
                {standards.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-100 text-sm md:text-base">
                    <CheckCircle2 className="w-5 h-5 text-[#ffcc00] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <WhatsAppModalOrganism
              units={units}
              buttonLabel="Solicitar Diagnóstico pelo WhatsApp"
              variant="primary"
              size="md"
              className="w-full"
              iconClassName="w-5 h-5 mr-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


