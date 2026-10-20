"use client";
import React from 'react';
import { Wrench, Shield, Zap, Car, Award } from 'lucide-react';

export default function BenefitsOrganism({ 
  benefits = [],
  benefitsTitle = '',
  benefitsSubtitle = ''
}) {

  const icons = [Wrench, Shield, Zap, Car, Award];

  return (
    <section className="bg-[#002d80] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-black text-white">
            {benefitsTitle}
          </h2>
          <p className="text-gray-300 mt-2 max-w-2xl mx-auto">
            {benefitsSubtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {benefits.map((b, index) => {
            const Icon = icons[index] || Car;
            return (
              <div key={index} className="w-full md:w-[calc(33.333%-1rem)] bg-[#001f5c] p-6 rounded-2xl border border-blue-900/60 shadow-lg">
                <div className="w-12 h-12 bg-[#ffcc00] text-gray-900 rounded-xl flex items-center justify-center mb-4 font-black">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
