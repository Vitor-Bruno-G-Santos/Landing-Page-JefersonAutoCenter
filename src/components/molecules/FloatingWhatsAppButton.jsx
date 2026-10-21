"use client";
import React from "react";
import { Phone } from "lucide-react";
import WhatsAppModalOrganism from "../organisms/WhatsAppModalOrganism";

export default function FloatingWhatsAppButton({ units = [], primaryTel = "+556730254562" }) {
  return (
    <>
      {/* Desktop: botão flutuante único */}
      <div className="hidden md:block">
        <WhatsAppModalOrganism units={units} variant="floating" buttonLabel="Agendar Diagnóstico pelo WhatsApp" />
      </div>

      {/* Mobile: barra inferior fixa Ligar | WhatsApp */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-[#001744]/95 backdrop-blur-md border-t border-blue-800 p-2.5 grid grid-cols-2 gap-2.5 shadow-2xl">
        <a
          href={`tel:${primaryTel}`}
          className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#001f5c] border border-blue-700 text-white font-bold text-sm"
        >
          <Phone className="w-4 h-4 text-[#ffcc00]" />
          <span>Ligar agora</span>
        </a>
        <WhatsAppModalOrganism
          units={units}
          buttonLabel="WhatsApp"
          variant="primary"
          size="sm"
          className="w-full py-3 rounded-xl text-sm"
        />
      </div>
    </>
  );
}
