"use client";
import React from "react";
import WhatsAppModalOrganism from "../organisms/WhatsAppModalOrganism";

export default function FloatingWhatsAppButton({ units = [], primaryTel = "+556730254562" }) {
  return (
    <>
      {/* Desktop: botão flutuante único */}
      <div className="hidden md:block">
        <WhatsAppModalOrganism units={units} variant="floating" buttonLabel="Agendar Diagnóstico pelo WhatsApp" />
      </div>

      {/* Mobile: barra inferior fixa WhatsApp */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-[#001744]/95 backdrop-blur-md border-t border-blue-800 p-2.5 shadow-2xl">
        <WhatsAppModalOrganism
          units={units}
          buttonLabel="Agendar pelo WhatsApp"
          variant="primary"
          size="sm"
          className="w-full py-3 rounded-xl text-sm"
        />
      </div>
    </>
  );
}
