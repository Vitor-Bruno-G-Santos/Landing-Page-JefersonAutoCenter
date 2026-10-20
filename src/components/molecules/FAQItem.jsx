import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="bg-[#001f5c] border border-blue-900/60 rounded-xl overflow-hidden transition-all">
      <button
        onClick={onToggle}
        className="w-full p-5 text-left flex items-center justify-between font-bold text-white hover:text-[#ffcc00] transition-colors"
      >
        <span className="pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-[#ffcc00] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 text-gray-300 text-sm leading-relaxed border-t border-blue-900/40 pt-3">
          {answer}
        </div>
      )}
    </div>
  );
}
