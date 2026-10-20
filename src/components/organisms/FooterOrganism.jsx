"use client";
import React from 'react';
import Logo from '../atoms/Logo';
import WhatsAppModalOrganism from './WhatsAppModalOrganism';
import { MapPin, Phone } from 'lucide-react';

export default function FooterOrganism({ 
  whatsappLink = '#',
  units = [],
  company = { name: '', description: '', city: '', cnpj: '', cta: {} },
  contact = { phone: '' }
}) {
  return (
    <footer className="bg-[#001744] text-gray-300 border-t border-blue-900/80 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        
        {/* RE-HERO / CTA FINAL */}
        <div className="md:col-span-5 space-y-4">
          <Logo showBox={true} className="inline-block" />
          <p className="text-sm text-gray-300 leading-relaxed">
            {company.description}
          </p>
          <WhatsAppModalOrganism
            units={units}
            buttonLabel={company.cta?.schedule || 'Agendar Agora'}
            variant="primary"
            size="md"
            iconClassName="w-5 h-5 mr-2"
          />
        </div>

        {/* UNIDADES */}
        <div className="md:col-span-4 space-y-3 text-sm">
          <h4 className="font-bold text-white text-base">Nossas Unidades</h4>
          {units.map((u, i) => (
            <div key={i} className="space-y-1">
              <p className="font-bold text-[#ffcc00]">{u.name}</p>
              <p className="text-xs text-gray-300 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-gray-400" /> {u.address}
              </p>
            </div>
          ))}
        </div>

        {/* CONTATO */}
        <div className="md:col-span-3 space-y-3 text-sm">
          <h4 className="font-bold text-white text-base">Fale Conosco</h4>
          <div className="space-y-3">
            {units.map((u, i) => (
              <div key={i} className="space-y-0.5">
                <p className="text-xs font-bold text-[#ffcc00]">{u.name}</p>
                <p className="flex items-center gap-2 text-gray-300 text-xs">
                  <Phone className="w-3.5 h-3.5 text-[#ffcc00] shrink-0" />
                  <span>
                    {u.phone.split('|').map((num, idx, arr) => {
                      const clean = num.trim();
                      const digits = clean.replace(/\D/g, '');
                      return (
                        <React.Fragment key={idx}>
                          <a href={`tel:+55${digits}`} className="hover:text-[#ffcc00] hover:underline transition-colors">
                            {clean}
                          </a>
                          {idx < arr.length - 1 && <span className="mx-1 text-gray-500">|</span>}
                        </React.Fragment>
                      );
                    })}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-blue-900/50 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
        <p>© {new Date().getFullYear()} {company.name}. Todos os direitos reservados.</p>
        <p>
          {company.city}
          {company.cnpj && !company.cnpj.includes('XX') ? ` | CNPJ: ${company.cnpj}` : ''}
        </p>
      </div>
    </footer>
  );
}
