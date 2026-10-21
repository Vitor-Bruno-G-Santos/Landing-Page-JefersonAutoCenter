"use client";
import React, { useState, useEffect } from 'react';
import Button from '../atoms/Button';
import WhatsAppIcon from '../atoms/WhatsAppIcon';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { highlightBrand } from '../../utils/highlightBrand';

export default function LocationMapsOrganism({ units = [] }) {
  const [activeTab, setActiveTab] = useState(0);

  // Reset to first tab only when the number of units changes
  useEffect(() => {
    setActiveTab(0);
  }, [units.length]);

  const currentUnit = units[activeTab] || {};


  return (
    <section id="unidades" className="bg-gradient-to-b from-[#002875] via-[#001f5c] to-[#001744] py-16 md:py-20 px-4 section-divider-top">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-black text-white">
            Nossas Unidades em <span className="text-[#ffcc00]">Campo Grande</span>
          </h2>
          <p className="text-gray-400 mt-2">Escolha a loja mais próxima e venha nos fazer uma visita!</p>
        </div>

        {/* TABS DE SELEÇÃO */}
        <div role="tablist" aria-label="Unidades Jeferson Autocenter" className="flex flex-wrap justify-center gap-3 mb-8">
          {units.map((unit, index) => (
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === index}
              aria-controls="unit-tabpanel"
              id={`unit-tab-${index}`}
              key={index}
              onClick={() => setActiveTab(index)}
              onKeyDown={(e) => {
                if (e.key === 'ArrowRight') setActiveTab((index + 1) % units.length);
                if (e.key === 'ArrowLeft') setActiveTab((index - 1 + units.length) % units.length);
              }}
              className={`px-5 py-3 rounded-xl font-bold text-sm md:text-base transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === index
                  ? 'bg-[#ffcc00] text-gray-900 shadow-lg scale-105'
                  : 'bg-[#001f5c] text-gray-300 border border-blue-900 hover:border-blue-700'
              }`}
            >
              <MapPin className="w-4 h-4" />
              {unit.name}
            </button>
          ))}
        </div>

        {/* CONTEÚDO DO MAPA E DETALHES */}
        <div id="unit-tabpanel" role="tabpanel" aria-labelledby={`unit-tab-${activeTab}`} className="reveal-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-[#001f5c] p-6 md:p-8 rounded-3xl border border-blue-900 shadow-2xl">
          
          {/* DETALHES DA UNIDADE */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <span className="bg-[#ffcc00]/20 text-[#ffcc00] text-xs font-bold px-3 py-1 rounded-full uppercase border border-[#ffcc00]/30">
                {currentUnit.badge}
              </span>
              <h3 className="text-2xl font-extrabold text-white mt-3 mb-2">{highlightBrand(currentUnit.name)}</h3>
              <p className="text-gray-300 text-sm flex items-start gap-2 mb-4">
                <MapPin className="w-5 h-5 text-[#ffcc00] shrink-0 mt-0.5" />
                {currentUnit.address}
              </p>

              <div className="space-y-3 border-t border-blue-800 pt-4 text-sm text-gray-200">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#ffcc00]" />
                  <span>
                    <strong>Telefones:</strong>{' '}
                    {(currentUnit.phone || '').split('|').map((num, idx, arr) => {
                      const clean = num.trim();
                      const digits = clean.replace(/\D/g, '');
                      return (
                        <React.Fragment key={idx}>
                          <a href={`tel:+55${digits}`} className="hover:text-[#ffcc00] hover:underline transition-colors">
                            {clean}
                          </a>
                          {idx < arr.length - 1 && <span className="mx-1 text-gray-400">|</span>}
                        </React.Fragment>
                      );
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#ffcc00]" />
                  <span><strong>Horário:</strong> {currentUnit.hours || 'Seg a Sex: 07:30 - 18:00'}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Button href={currentUnit.whatsapp} target="_blank" rel="noreferrer" variant="primary" className="w-full">
                <WhatsAppIcon className="w-5 h-5 mr-2" />
                Falar com a Unidade {currentUnit.shortName || currentUnit.name}
              </Button>
              <Button href={currentUnit.mapsUrl} target="_blank" rel="noreferrer" variant="outline" className="w-full">
                <Navigation className="w-5 h-5 mr-2" />
                Traçar Rota no Google Maps
              </Button>
            </div>
          </div>

          {/* MAPA GOOGLE EMBED */}
          <div className="lg:col-span-7 h-[350px] lg:h-auto rounded-2xl overflow-hidden border-2 border-blue-800 shadow-inner">
            <iframe
              key={activeTab}
              title={`Mapa ${currentUnit.name}`}
              src={currentUnit.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
