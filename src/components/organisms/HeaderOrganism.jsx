"use client";
import React from 'react';
import Logo from '../atoms/Logo';
import { MapPin } from 'lucide-react';
import WhatsAppModalOrganism from '../organisms/WhatsAppModalOrganism';

export default function HeaderOrganism({ whatsappLink = '#', units = [] }) {
  return (
    <header className="sticky top-0 z-50 bg-[#001744]/95 backdrop-blur-md border-b border-blue-900/60 py-3.5 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* LOGO */}
        <Logo />

        {/* NAVEGAÇÃO RÁPIDA */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-200">
          <a href="#servicos" className="hover:text-[#ffcc00] transition-colors">Serviços</a>
          <a href="#avaliacoes" className="hover:text-[#ffcc00] transition-colors">Avaliações</a>
          <a href="#unidades" className="hover:text-[#ffcc00] transition-colors">Nossas Lojas</a>
          <a href="#faq" className="hover:text-[#ffcc00] transition-colors">Dúvidas</a>
        </nav>

        {/* CONTATOS & CTA */}
        <div className="flex items-center gap-4">
          <a
            href="#unidades"
            className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold text-gray-300 hover:text-[#ffcc00] transition-colors"
          >
            <MapPin className="w-4 h-4 text-[#ffcc00]" />
            <span>Salgado Filho e Júlio de Castilho</span>
          </a>
          <WhatsAppModalOrganism units={units} buttonLabel="Falar no WhatsApp" variant="primary" />
        </div>
      </div>
    </header>
  );
}

