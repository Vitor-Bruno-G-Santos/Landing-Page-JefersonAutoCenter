import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  target,
  rel,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center transition-all transform active:scale-95 text-center cursor-pointer';
  
  const variants = {
    primary: 'font-bold rounded-lg bg-[#ffcc00] hover:bg-[#e6b800] text-gray-900 border-b-4 border-yellow-600 hover:border-yellow-700 shadow-md hover:shadow-xl',
    whatsapp: 'font-bold rounded-lg bg-[#1da851] hover:bg-[#178c43] text-white border-b-4 border-green-900 shadow-md hover:shadow-xl',
    secondary: 'font-bold rounded-lg bg-[#001f5c] hover:bg-[#001744] text-white border border-[#002d80] shadow-md hover:shadow-xl',
    outline: 'font-bold rounded-lg border-2 border-[#ffcc00] text-[#ffcc00] hover:bg-[#ffcc00] hover:text-gray-900 shadow-md hover:shadow-xl',
    header: 'font-medium rounded-md bg-transparent hover:bg-white/10 text-white border border-[#8991b7] hover:border-white shadow-none',
    headerOutline: 'font-medium rounded-md bg-transparent hover:bg-white/10 text-white border border-[#8991b7] hover:border-white shadow-none'
  };

  const sizes = {
    sm: 'px-3.5 py-1.5 text-sm',
    md: 'px-6 py-3.5 text-base',
    lg: 'px-8 py-4 text-lg md:text-xl'
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
