"use client";
import React, { useState } from 'react';
import FAQItem from '../molecules/FAQItem';

export default function FAQOrganism({ 
  faqs = [],
  faqTitle = '',
  faqSubtitle = ''
}) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-[#001f5c] py-16 px-4 border-t border-blue-900/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-white">
            {faqTitle}
          </h2>
          <p className="text-gray-300 mt-2 text-sm">{faqSubtitle}</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
