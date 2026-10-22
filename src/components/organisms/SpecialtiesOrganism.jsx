"use client";
import React from 'react';
import SpecialtyItem from '../molecules/SpecialtyItem';
import { highlightBrand } from '../../utils/highlightBrand';

export default function SpecialtiesOrganism({
  title = "Outras especialidades realizadas nas 2 unidades",
  subtitle = "Atendemos veículos nacionais, importados e utilitários com diagnóstico computadorizado:",
  specialties = [],
  asSection = false,
  className = ""
}) {
  if (!specialties || specialties.length === 0) return null;

  const content = (
    <div className={`bg-[#001f5c] border border-blue-800/80 rounded-md p-6 md:p-8 ${className}`}>
      <div className="mb-6">
        <h3 className="text-xl md:text-2xl font-extrabold text-white">
          {highlightBrand(title)}
        </h3>
        {subtitle && (
          <p className="text-gray-200 text-base mt-1">
            {subtitle}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {specialties.map((item, idx) => {
          const isObject = typeof item === 'object' && item !== null;
          const itemTitle = isObject ? item.title : item;
          const itemDesc = isObject ? item.desc : '';
          return (
            <SpecialtyItem
              key={idx}
              title={itemTitle}
              desc={itemDesc}
              delay={(idx % 3) * 100}
            />
          );
        })}
      </div>
    </div>
  );

  if (asSection) {
    return (
      <section id="especialidades" className="bg-gradient-to-b from-[#001f5c] to-[#001744] py-16 px-4 section-divider-top">
        <div className="max-w-[1400px] mx-auto">
          {content}
        </div>
      </section>
    );
  }

  return content;
}
