"use client";
import React from 'react';
import ServiceCard from '../molecules/ServiceCard';
import SpecialtiesOrganism from './SpecialtiesOrganism';
import { highlightBrand } from '../../utils/highlightBrand';

export default function ServicesPricingOrganism({ 
  whatsappLink = '#',
  units = [],
  services = [],
  servicesTitle = '',
  servicesSubtitle = '',
  priceDisclaimer = '',
  specialties = []
}) {
  return (
    <section id="servicos" className="bg-gradient-to-b from-[#001f5c] to-[#001744] py-16 md:py-20 px-4 section-divider-top">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black text-white">
            {highlightBrand(servicesTitle)}
          </h2>
          <p className="text-gray-200 text-base mt-2">{servicesSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {services.map((s, idx) => (
            <ServiceCard key={idx} {...s} whatsappLink={whatsappLink} units={units} delay={idx * 150} />
          ))}
        </div>

        {priceDisclaimer && (
          <p className="text-sm text-gray-300 mt-4 text-center max-w-3xl mx-auto">
            {priceDisclaimer}
          </p>
        )}

      </div>
    </section>
  );
}
