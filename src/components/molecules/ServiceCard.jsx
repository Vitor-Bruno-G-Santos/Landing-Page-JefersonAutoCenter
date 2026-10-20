import React from 'react';
import { CheckCircle2, Wrench } from 'lucide-react';
import WhatsAppModalOrganism from '../organisms/WhatsAppModalOrganism';

export default function ServiceCard({
  title,
  category,
  image,
  price,
  period,
  popular = false,
  features = [],
  badgeText,
  units = []
}) {
  return (
    <div
      className={`relative bg-[#001f5c] rounded-2xl overflow-hidden transition-all flex flex-col justify-between shadow-lg hover:shadow-2xl ${
        popular
          ? 'border-2 border-[#ffcc00] ring-4 ring-[#ffcc00]/15'
          : 'border border-blue-900/70 hover:border-blue-700'
      }`}
    >
      <div>
        <div className="relative h-48 w-full bg-[#001744] overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={`${title} - Jeferson Autocenter`}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[#ffcc00]">
              <Wrench className="w-12 h-12" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#001f5c] via-[#001744]/30 to-transparent" />

          {popular && (
            <div className="absolute top-3 right-3 bg-[#ffcc00] text-gray-900 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
              {badgeText || 'Mais Procurado'}
            </div>
          )}

          {category && (
            <span className="absolute bottom-3 left-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#ffcc00] bg-[#001744]/90 backdrop-blur-sm px-2.5 py-1 rounded-md border border-blue-800/80">
              <Wrench className="w-3.5 h-3.5" />
              {category}
            </span>
          )}
        </div>

        <div className="p-6 pb-4">
          <h3 className="text-xl font-extrabold text-white mb-3">{title}</h3>

          <div className="bg-[#001744]/90 border border-blue-800/80 rounded-xl px-4 py-3 mb-5 flex items-baseline justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Valor de referência
            </span>
            <div>
              <span className="text-xl font-black text-[#ffcc00]">{price}</span>
              {period && <span className="text-gray-400 text-xs"> {period}</span>}
            </div>
          </div>

          <ul className="space-y-2.5 mb-4">
            {features.map((feat, index) => (
              <li key={index} className="flex items-start gap-2.5 text-gray-200 text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#ffcc00] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-6 pb-6 pt-2">
        <WhatsAppModalOrganism
          units={units}
          buttonLabel="Solicitar Orçamento"
          variant={popular ? 'primary' : 'outline'}
          size="md"
          className="w-full"
          iconClassName="w-5 h-5 mr-2"
        />
      </div>
    </div>
  );
}


