"use client";
import React, { useState } from 'react';
import { assetUrl } from '../../utils/assetPath';

export default function Logo({
  className = "",
  src = "images/logo.webp",
  alt = "Jeferson Autocenter",
  showBox = true,
  textOnly = false,
  ...props
}) {
  const [imageFailed, setImageFailed] = useState(false);
  const resolvedSrc = assetUrl(src);

  if (textOnly) {
    return (
      <a href="#" className={className} {...props}>
        <span className="text-lg font-black tracking-tight text-white leading-none">Jeferson</span>
      </a>
    );
  }

  return (
    <a href="#" className={`inline-flex items-center gap-3 ${className}`} {...props}>
      {!imageFailed ? (
        <img
          src={resolvedSrc}
          alt={alt}
          width="200"
          height="48"
          decoding="async"
          className="h-10 md:h-12 w-auto max-w-[190px] md:max-w-[240px] object-contain transition-transform hover:scale-105"
          onError={(e) => {
            if (!e.currentTarget.dataset.retried) {
              e.currentTarget.dataset.retried = "true";
              e.currentTarget.src = assetUrl("images/logo.png");
            } else {
              setImageFailed(true);
            }
          }}
        />
      ) : (
        <div className="bg-[#001f5c] border-2 border-[#ffcc00] text-white px-3 py-1.5 rounded-lg shadow-md flex flex-col">
          <span className="text-xs uppercase tracking-widest text-[#ffcc00] font-black">AUTOCENTER</span>
          <span className="text-lg md:text-xl font-black tracking-tight text-white leading-none">Jeferson</span>
        </div>
      )}
    </a>
  );
}
