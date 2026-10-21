"use client";
import React, { useState } from 'react';
import FAQItem from '../molecules/FAQItem';
import { highlightBrand } from '../../utils/highlightBrand';

export default function FAQOrganism({ 
  faqs = [],
  faqTitle = '',
  faqSubtitle = ''
}) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-gradient-to-b from-[#001744] to-[#001f5c] py-16 px-4 section-divider-top">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-white">
            {highlightBrand(faqTitle)}
          </h2>
          <p className="text-gray-200 mt-2 text-base">{faqSubtitle}</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              id={index}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              delay={index * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
