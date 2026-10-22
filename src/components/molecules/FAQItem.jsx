import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQItem({ id, question, answer, isOpen, onToggle, delay = 0 }) {
  const panelId = `faq-panel-${id}`;
  const buttonId = `faq-button-${id}`;

  return (
    <div 
      className="reveal-card bg-[#001f5c] border border-blue-900/60 rounded-md overflow-hidden transition-all"
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      <button
        id={buttonId}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full p-5 text-left flex items-center justify-between font-bold text-white hover:text-[#ffcc00] transition-colors cursor-pointer text-base"
      >
        <span className="pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-[#ffcc00] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          className="px-5 pb-5 text-gray-200 text-base leading-relaxed border-t border-blue-900/40 pt-3"
        >
          {answer}
        </div>
      )}
    </div>
  );
}
