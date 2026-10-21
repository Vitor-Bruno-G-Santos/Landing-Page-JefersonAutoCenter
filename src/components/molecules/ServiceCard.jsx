import React from 'react';
import { CheckCircle2, Wrench } from 'lucide-react';
import WhatsAppModalOrganism from '../organisms/WhatsAppModalOrganism';

export default function ServiceCard({
  title,
  image,
  price,
  pricePrefix = 'A partir de',
  priceValue,
  popular = false,
  features = [],
  badgeText,
  ctaLabel = 'Agendar Diagnóstico pelo WhatsApp',
  units = []
}) {
  const displayValue = priceValue || (price ? price.replace(/^A partir de\s*/i, '') : '');

  return (
    <div
      className={`relative bg-[#001f5c] rounded-2xl overflow-hidden transition-all flex flex-col justify-between shadow-lg hover:shadow-2xl border-2 ${
        popular
          ? 'border-[#ffcc00] ring-4 ring-[#ffcc00]/15'
          : 'border-blue-900/70 hover:border-blue-700'
      }`}
    >
      <div>
        <div className="relative h-48 w-full bg-[#001744] overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={`${title} - Jeferson Autocenter`}
              width="400"
              height="240"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[#ffcc00]">
              <Wrench className="w-12 h-12" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#001f5c] via-[#001744]/25 to-transparent" />

          {popular && (
            <div className="absolute top-3 right-3 bg-[#ffcc00] text-gray-900 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
              {badgeText || 'Mais procurado'}
            </div>
          )}
        </div>

        <div className="p-6 pb-4">
          <h3 className="text-xl font-extrabold text-white mb-4">{title}</h3>

          <div className="bg-[#001744]/90 border border-blue-800/80 rounded-xl px-4 py-3 mb-5 flex items-center justify-between gap-3">
            <span className="text-xs font-semibold text-gray-300">
              Valor de referência*
            </span>
            <div className="text-right">
              <span className="block text-xs text-gray-300 leading-tight">{pricePrefix}</span>
              <span className="text-2xl font-black text-[#ffcc00] whitespace-nowrap">{displayValue}</span>
            </div>
          </div>

          <ul className="space-y-2.5 mb-4">
            {features.map((feat, index) => (
              <li key={index} className="flex items-start gap-2.5 text-gray-200 text-base">
                <CheckCircle2 className="w-4 h-4 text-[#ffcc00] shrink-0 mt-1" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-6 pb-6 pt-2">
        <WhatsAppModalOrganism
          units={units}
          buttonLabel={ctaLabel}
          variant={popular ? 'primary' : 'outline'}
          size="md"
          className="w-full"
          iconClassName="w-5 h-5 mr-2"
        />
      </div>
    </div>
  );
}
