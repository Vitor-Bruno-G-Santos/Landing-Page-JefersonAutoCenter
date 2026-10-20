import React from 'react';

export default function Logo({
  className = "",
  showBox = true,
  textOnly = false,
  ...props
}) {
  if (textOnly) {
    return (
      <a href="#" className={className} {...props}>
        <span className="text-lg font-black tracking-tight text-white leading-none">Jeferson</span>
      </a>
    );
  }

  return (
    <a href="#" className={`inline-flex items-center gap-3 ${className}`} {...props}>
      {showBox && (
        <div className="bg-[#001f5c] border-2 border-[#ffcc00] text-white px-3 py-1.5 rounded-lg shadow-md flex flex-col">
          <span className="text-xs uppercase tracking-widest text-[#ffcc00] font-black">AUTOCENTER</span>
          <span className="text-lg md:text-xl font-black tracking-tight text-white leading-none">Jeferson</span>
        </div>
      )}
      {!showBox && (
        <>
          <span className="text-xs uppercase tracking-widest text-[#ffcc00] font-black">AUTOCENTER</span>
          <span className="text-lg md:text-xl font-black tracking-tight text-white leading-none">Jeferson</span>
        </>
      )}
    </a>
  );
}
