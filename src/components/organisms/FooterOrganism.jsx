"use client";
import React from 'react';
import Logo from '../atoms/Logo';
import WhatsAppIcon from '../atoms/WhatsAppIcon';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function FooterOrganism({ 
  units = [],
  company = { name: '', footerDescription: '', description: '', city: '', cnpj: '', hours: '' }
}) {
  return (
    <footer className="bg-gradient-to-b from-[#001744] to-[#000f2e] text-gray-200 section-divider-top pt-14 pb-24 md:pb-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
        
        <div className="md:col-span-4 space-y-4">
          <Logo showBox={true} className="inline-block" />
          <p className="text-sm text-gray-200 leading-relaxed">
            {company.footerDescription || company.description}
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-200">
            <Clock className="w-4 h-4 text-[#ffcc00] shrink-0" />
            <span>{company.hours || 'Seg a Sex: 07h30 às 18h00 • Sáb e Dom: Fechado'}</span>
          </p>
        </div>

        <div className="md:col-span-4 space-y-3 text-sm">
          <h3 className="font-bold text-white text-base">Unidades em Campo Grande</h3>
          {units.map((u, i) => (
            <div key={i} className="space-y-1">
              <p className="font-bold text-[#ffcc00] text-sm">{u.name}</p>
              <p className="text-sm text-gray-200 flex items-start gap-1.5">
                <MapPin className="w-4 h-4 text-gray-300 shrink-0 mt-0.5" />
                <span>{u.address}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="md:col-span-4 space-y-3 text-sm">
          <h3 className="font-bold text-white text-base">Telefones e WhatsApp</h3>
          <div className="space-y-3">
            {units.map((u, i) => (
              <div key={i} className="space-y-1">
                <p className="text-sm font-bold text-[#ffcc00]">{u.name}</p>
                <p className="flex items-center gap-2 text-gray-200 text-sm">
                  <Phone className="w-4 h-4 text-[#ffcc00] shrink-0" />
                  <span>
                    {(u.phone || '').split('|').map((num, idx, arr) => {
                      const clean = num.trim();
                      const digits = clean.replace(/\D/g, '');
                      return (
                        <React.Fragment key={idx}>
                          <a href={`tel:+55${digits}`} className="hover:text-[#ffcc00] underline transition-colors">
                            {clean}
                          </a>
                          {idx < arr.length - 1 && <span className="mx-1 text-gray-400">|</span>}
                        </React.Fragment>
                      );
                    })}
                  </span>
                </p>
                {u.whatsappDisplay && (
                  <p className="flex items-center gap-2 text-gray-200 text-sm">
                    <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
                    <a href={u.whatsapp} target="_blank" rel="noreferrer" className="hover:text-[#ffcc00] underline">
                      WhatsApp: {u.whatsappDisplay}
                    </a>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-blue-900/50 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-300 gap-4">
        <p>© {new Date().getFullYear()} {company.name}. Todos os direitos reservados.</p>
        <p className="text-center md:text-right">
          {company.city} • Privacidade e LGPD: este site não utiliza cookies de rastreamento invasivos; mapas externos só são carregados mediante clique.
        </p>
      </div>
    </footer>
  );
}
