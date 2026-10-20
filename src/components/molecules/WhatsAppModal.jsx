"use client";
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { MapPin, Phone, X } from 'lucide-react';
import WhatsAppIcon from '../atoms/WhatsAppIcon';

/**
 * Molecule that renders a modal with a list of units.
 * When a unit is selected, `onSelect` receives the unit's WhatsApp URL.
 */
export default function WhatsAppModal({ units = [], onSelect, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const modalContent = (
    <div
      className="fixed inset-0 bg-[#001744]/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="whatsapp-modal-title"
    >
      <div
        className="relative bg-[#001f5c] border-2 border-[#ffcc00]/40 rounded-3xl p-6 md:p-8 w-full max-w-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão Fechar */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar modal"
          className="absolute top-5 right-5 text-gray-300 hover:text-[#ffcc00] bg-[#002d80] hover:bg-blue-800 border border-blue-800 rounded-xl p-2 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Cabeçalho */}
        <div className="mb-6 pr-10">
          <span className="inline-flex items-center gap-1.5 bg-[#ffcc00]/20 text-[#ffcc00] text-xs font-bold px-3 py-1 rounded-full uppercase border border-[#ffcc00]/30 mb-3">
            <WhatsAppIcon className="w-3.5 h-3.5" />
            Atendimento Rápido
          </span>
          <h2 id="whatsapp-modal-title" className="text-2xl md:text-3xl font-black text-white leading-tight">
            Escolha a <span className="text-[#ffcc00]">Unidade</span>
          </h2>
          <p className="text-gray-300 text-sm mt-1">
            Selecione a loja mais próxima para iniciar a conversa no WhatsApp:
          </p>
        </div>

        {/* Lista de Unidades */}
        <ul className="space-y-3 mb-6">
          {units.map((unit) => (
            <li key={unit.name}>
              <button
                type="button"
                onClick={() => onSelect(unit.whatsapp)}
                className="group w-full text-left p-4 bg-[#002d80] hover:bg-[#002266] border border-blue-800 hover:border-[#ffcc00] rounded-2xl transition-all flex items-center justify-between gap-4 shadow-md hover:shadow-xl cursor-pointer"
              >
                <div className="space-y-1.5 min-w-0">
                  {unit.badge && (
                    <span className="inline-block bg-[#ffcc00]/20 text-[#ffcc00] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase border border-[#ffcc00]/30">
                      {unit.badge}
                    </span>
                  )}
                  <p className="font-extrabold text-white text-base md:text-lg group-hover:text-[#ffcc00] transition-colors">
                    {unit.name}
                  </p>
                  {unit.address && (
                    <p className="text-xs text-gray-300 flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#ffcc00] shrink-0 mt-0.5" />
                      <span>{unit.address}</span>
                    </p>
                  )}
                  {unit.phone && (
                    <p className="text-xs text-gray-300 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#ffcc00] shrink-0" />
                      <span>{unit.phone}</span>
                    </p>
                  )}
                </div>

                <div className="shrink-0 bg-[#25D366] group-hover:bg-[#20ba59] text-white p-3 rounded-xl shadow-lg border-b-2 border-green-700 transition-transform group-hover:scale-105 flex items-center justify-center">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
              </button>
            </li>
          ))}
        </ul>

        {/* Rodapé / Cancelar */}
        <button
          type="button"
          onClick={onClose}
          className="w-full py-3 px-4 bg-[#002d80] hover:bg-blue-900/80 text-gray-200 hover:text-white font-bold text-sm rounded-xl border border-blue-800 transition-colors cursor-pointer"
        >
          Cancelar
        </button>
      </div>
    </div>
  );

  if (typeof document !== 'undefined') {
    return createPortal(modalContent, document.body);
  }

  return modalContent;
}

