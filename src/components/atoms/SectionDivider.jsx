import React from 'react';

/**
 * Linha divisora com gradiente suave (fade transparente nas extremidades).
 */
export default function SectionDivider({ className = '' }) {
  return (
    <div
      className={`w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}
