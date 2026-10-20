import React from 'react';

export default function Badge({ children, icon: Icon, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs md:text-sm font-semibold bg-[#ffcc00]/20 text-[#ffcc00] border border-[#ffcc00]/40 ${className}`}>
      {Icon && <Icon className="w-4 h-4 text-[#ffcc00]" />}
      {children}
    </span>
  );
}
