"use client";
import React, { useState } from 'react';
import Logo from '../atoms/Logo';
import { Menu, X } from 'lucide-react';
import WhatsAppModalOrganism from '../organisms/WhatsAppModalOrganism';

export default function HeaderOrganism({ whatsappLink = '#', units = [], contact = {} }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#como-funciona', label: 'Como funciona' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#avaliacoes', label: 'Avaliações' },
    { href: '#unidades', label: 'Unidades' },
    { href: '#faq', label: 'Dúvidas' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#001744]/95 backdrop-blur-md section-divider-bottom py-2.5 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <Logo />

        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-gray-200" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-[#ffcc00] transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <WhatsAppModalOrganism units={units} buttonLabel="Agendar pelo WhatsApp" variant="header" size="sm" />
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            className="md:hidden p-2 rounded-lg bg-[#001f5c] border border-blue-800 text-gray-200 hover:text-[#ffcc00]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden mt-3 pt-3 border-t border-blue-900/60 flex flex-col gap-2 pb-2" aria-label="Menu mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-base font-semibold text-gray-100 hover:bg-[#001f5c] hover:text-[#ffcc00]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 sm:hidden">
            <WhatsAppModalOrganism units={units} buttonLabel="Agendar pelo WhatsApp" variant="header" size="sm" className="w-full justify-center" />
          </div>
        </nav>
      )}
    </header>
  );
}
