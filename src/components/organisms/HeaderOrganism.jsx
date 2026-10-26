"use client";
import React, { useState } from 'react';
import Logo from '../atoms/Logo';
import { Menu, X } from 'lucide-react';
import WhatsAppModalOrganism from '../organisms/WhatsAppModalOrganism';

export default function HeaderOrganism({ whatsappLink = '#', units = [], contact = {} }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#como-funciona', label: 'Como funciona' },
    { href: '#fotos', label: 'Fotos' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#avaliacoes', label: 'Avaliações' },
    { href: '#unidades', label: 'Unidades' },
    { href: '#faq', label: 'Dúvidas' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#001744] border-b border-blue-900/60">
      <div className="relative z-50 w-full bg-[#001744] py-2.5 px-4 md:px-8">
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
              className="md:hidden p-2 rounded-xl bg-[#001f5c] border border-blue-800 text-gray-200 hover:text-[#ffcc00]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 bg-black/60 z-40"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <nav
            className="md:hidden absolute top-full -mt-px left-0 right-0 w-full bg-[#001744] border-b-2 border-blue-700 shadow-2xl px-4 py-4 flex flex-col gap-2 max-h-[calc(100vh-70px)] overflow-y-auto z-50"
            aria-label="Menu mobile"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-lg text-base font-semibold text-gray-100 hover:bg-[#001f5c] hover:text-[#ffcc00] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-1 sm:hidden border-t border-blue-900/60">
              <WhatsAppModalOrganism
                units={units}
                buttonLabel="Agendar pelo WhatsApp"
                variant="header"
                size="sm"
                className="w-full justify-center"
              />
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
