"use client";
import React from 'react';
import { MessageSquare, Cpu, FileText, ShieldCheck } from 'lucide-react';
import { highlightBrand } from '../../utils/highlightBrand';

export default function HowItWorksOrganism({
  howItWorks = {},
  units = [],
  ctaLabel = 'Agendar Diagnóstico pelo WhatsApp'
}) {
  const { title = '', subtitle = '', steps = [] } = howItWorks;
  const icons = [MessageSquare, Cpu, FileText, ShieldCheck];

  return (
    <section 
      id="como-funciona" 
      className="relative bg-gradient-to-b from-[#001744] via-[#001f5c] to-[#002d80] text-white py-16 md:py-24 px-4 section-divider-top overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
            PROCESSO DE <span className="text-[#ffcc00]">ATENDIMENTO</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base mt-2.5 max-w-xl mx-auto">
            {subtitle || 'Acompanhe as etapas do nosso atendimento de ponta a ponta.'}
          </p>
        </div>

        {/* TIMELINE DESKTOP (Linha contínua perfeitamente alinhada com os 4 passos) */}
        <div className="hidden lg:flex justify-center pb-12 overflow-x-auto select-none">
          <div className="relative w-[1345px] h-[510px] shrink-0">
            
            {/* SVG ÚNICO CONTÍNUO: LINHA DO TEMPO, SETAS E PONTOS AMARELOS */}
            <svg 
              className="absolute inset-0 w-[1345px] h-[510px] pointer-events-none z-20" 
              viewBox="0 0 1345 510" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* LINHA CONTÍNUA COMPLETA (10px azul claro #67b0e8) */}
              <path
                d="M 0 315 
                   L 325 315 
                   C 335 315 340 320 340 330 
                   L 340 400 
                   C 340 410 345 415 355 415 
                   L 625 415 
                   C 635 415 640 410 640 400 
                   L 640 330 
                   C 640 320 645 315 655 315 
                   L 925 315 
                   C 935 315 940 320 940 330 
                   L 940 400 
                   C 940 410 945 415 955 415 
                   L 1225 415 
                   C 1238 415 1245 408 1245 395 
                   L 1245 340 
                   C 1245 328 1252 320 1265 320 
                   L 1315 320"
                stroke="#67b0e8"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* SETA 1: DESCENDO ENTRE CARD 1 E 2 */}
              <polygon points="330,355 340,375 350,355" fill="#67b0e8" />

              {/* SETA 2: SUBINDO ENTRE CARD 2 E 3 */}
              <polygon points="630,375 640,355 650,375" fill="#67b0e8" />

              {/* SETA 3: DESCENDO ENTRE CARD 3 E 4 */}
              <polygon points="930,355 940,375 950,355" fill="#67b0e8" />

              {/* SETA 4: SUBINDO APÓS CARD 4 */}
              <polygon points="1235,375 1245,355 1255,375" fill="#67b0e8" />

              {/* SETA 5: HORIZONTAL GRANDE FINAL APONTANDO PARA A DIREITA */}
              <polygon points="1310,305 1345,320 1310,335" fill="#67b0e8" />

              {/* PONTOS AMARELOS (CENTRALIZADOS EM CADA PASSO) */}
              <circle cx="190" cy="315" r="7" fill="#ffcc00" stroke="#001f5c" strokeWidth="4" />
              <circle cx="490" cy="415" r="7" fill="#ffcc00" stroke="#001f5c" strokeWidth="4" />
              <circle cx="790" cy="315" r="7" fill="#ffcc00" stroke="#001f5c" strokeWidth="4" />
              <circle cx="1090" cy="415" r="7" fill="#ffcc00" stroke="#001f5c" strokeWidth="4" />
            </svg>

            {/* CARD 1 (Posição Alta: top-0, left-[60px]) */}
            <div 
              className="reveal-card absolute left-[60px] top-0 w-[260px] h-[380px] bg-[#001f5c] border border-blue-600/40 rounded-md p-6 shadow-2xl flex flex-col justify-between z-10"
              style={{ transitionDelay: '0ms' }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-md bg-[#ffcc00] text-gray-950 flex items-center justify-center font-black shadow-md">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-black text-[#ffcc00]">
                    {steps[0]?.step || '01'}
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-white text-center leading-snug mb-2">
                  {steps[0]?.title || 'Agendamento ou chegada na unidade'}
                </h3>
                <p className="text-xs text-gray-200 text-center leading-relaxed">
                  {steps[0]?.desc || 'Chame no WhatsApp ou ligue para escolher a unidade mais próxima (Salgado Filho ou Júlio de Castilho) e trazer seu veículo.'}
                </p>
              </div>

              <div className="text-center text-sm font-black tracking-widest text-blue-300/80 uppercase pb-2">
                PASSO 1
              </div>
            </div>

            {/* CARD 2 (Posição Baixa: top-[100px], left-[360px]) */}
            <div 
              className="reveal-card absolute left-[360px] top-[100px] w-[260px] h-[380px] bg-[#001f5c] border border-blue-600/40 rounded-md p-6 shadow-2xl flex flex-col justify-between z-10"
              style={{ transitionDelay: '150ms' }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-md bg-[#ffcc00] text-gray-950 flex items-center justify-center font-black shadow-md">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-black text-[#ffcc00]">
                    {steps[1]?.step || '02'}
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-white text-center leading-snug mb-2">
                  {steps[1]?.title || 'Diagnóstico técnico com scanner'}
                </h3>
                <p className="text-xs text-gray-200 text-center leading-relaxed">
                  {steps[1]?.desc || 'Nossa equipe realiza leitura computadorizada e inspeção mecânica no elevador para identificar a causa real do problema.'}
                </p>
              </div>

              <div className="text-center text-sm font-black tracking-widest text-blue-300/80 uppercase pb-2">
                PASSO 2
              </div>
            </div>

            {/* CARD 3 (Posição Alta: top-0, left-[660px]) */}
            <div 
              className="reveal-card absolute left-[660px] top-0 w-[260px] h-[380px] bg-[#001f5c] border border-blue-600/40 rounded-md p-6 shadow-2xl flex flex-col justify-between z-10"
              style={{ transitionDelay: '300ms' }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-md bg-[#ffcc00] text-gray-950 flex items-center justify-center font-black shadow-md">
                    <FileText className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-black text-[#ffcc00]">
                    {steps[2]?.step || '03'}
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-white text-center leading-snug mb-2">
                  {steps[2]?.title || 'Orçamento discriminado no seu WhatsApp'}
                </h3>
                <p className="text-xs text-gray-200 text-center leading-relaxed">
                  {steps[2]?.desc || 'Enviamos o diagnóstico claro e o orçamento discriminado de peças e mão de obra para você avaliar e aprovar.'}
                </p>
              </div>

              <div className="text-center text-sm font-black tracking-widest text-blue-300/80 uppercase pb-2">
                PASSO 3
              </div>
            </div>

            {/* CARD 4 (Posição Baixa: top-[100px], left-[960px]) */}
            <div 
              className="reveal-card absolute left-[960px] top-[100px] w-[260px] h-[380px] bg-[#001f5c] border border-blue-600/40 rounded-md p-6 shadow-2xl flex flex-col justify-between z-10"
              style={{ transitionDelay: '450ms' }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-md bg-[#ffcc00] text-gray-950 flex items-center justify-center font-black shadow-md">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-black text-[#ffcc00]">
                    {steps[3]?.step || '04'}
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-white text-center leading-snug mb-2">
                  {steps[3]?.title || 'Execução autorizada e 90 dias de garantia'}
                </h3>
                <p className="text-xs text-gray-200 text-center leading-relaxed">
                  {steps[3]?.desc || 'O serviço só começa após sua aprovação e é entregue no prazo combinado com garantia registrada na ordem de serviço.'}
                </p>
              </div>

              <div className="text-center text-sm font-black tracking-widest text-blue-300/80 uppercase pb-2">
                PASSO 4
              </div>
            </div>

          </div>
        </div>

        {/* TIMELINE MOBILE / TABLET (Vertical contínua) */}
        <div className="lg:hidden max-w-lg mx-auto relative pl-8 sm:pl-10 space-y-8">
          {(steps || []).map((item, idx) => {
            const Icon = icons[idx] || ShieldCheck;
            const isLast = idx === steps.length - 1;
            return (
              <div key={idx} className="relative">
                {/* Segmento da linha vertical (do centro desta bola até o centro da próxima) */}
                {!isLast && (
                  <div className="absolute -left-[23px] sm:-left-[25px] top-[34px] -bottom-[66px] w-[6px] bg-[#67b0e8]" />
                )}

                {/* Ponto Amarelo indicador na linha vertical */}
                <div className="absolute -left-[30px] sm:-left-[32px] top-6 w-5 h-5 rounded-full bg-[#ffcc00] border-4 border-[#001744] z-10 shadow-md" />

                <div 
                  className="reveal-card bg-[#001f5c] border border-blue-600/40 rounded-md p-5 sm:p-6 shadow-xl"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-md bg-[#ffcc00] text-gray-950 flex items-center justify-center font-black shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-black tracking-widest text-blue-300 uppercase bg-blue-950/60 px-3 py-1 rounded-full border border-blue-800">
                      PASSO {idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-200 leading-relaxed">
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
