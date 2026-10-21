import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function SpecialtyItem({ title, desc }) {
  return (
    <div className="bg-[#001744] border border-blue-800/80 rounded-2xl p-4 flex items-start gap-3 hover:border-blue-700 transition-colors">
      <CheckCircle2 className="w-5 h-5 text-[#ffcc00] shrink-0 mt-0.5" />
      <div>
        <h4 className="text-base font-bold text-white">{title}</h4>
        {desc && <p className="text-sm text-gray-300 mt-1 leading-relaxed">{desc}</p>}
      </div>
    </div>
  );
}
