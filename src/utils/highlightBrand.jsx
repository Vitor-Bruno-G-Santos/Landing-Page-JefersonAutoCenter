import React from 'react';

/**
 * Encontra ocorrências de "Jeferson Autocenter" (e variações como "Jeferson Auto Center")
 * em textos e as envolve em um <span> com destaque em amarelo (#ffcc00).
 *
 * @param {string|React.ReactNode} content
 * @returns {React.ReactNode}
 */
export function highlightBrand(content) {
  if (typeof content !== 'string') return content;

  const brandRegex = /(Jeferson\s+Auto\s*center)/gi;
  if (!brandRegex.test(content)) return content;

  const parts = content.split(/(Jeferson\s+Auto\s*center)/gi);
  return parts.map((part, index) => {
    if (/^Jeferson\s+Auto\s*center$/i.test(part)) {
      return (
        <span key={index} className="text-[#ffcc00] font-black">
          {part}
        </span>
      );
    }
    return part;
  });
}

export default highlightBrand;
