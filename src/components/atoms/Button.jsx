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
  const baseStyles = 'inline-flex items-center justify-center font-bold rounded-lg transition-all transform active:scale-95 shadow-md hover:shadow-xl text-center cursor-pointer';
  
  const variants = {
    primary: 'bg-[#ffcc00] hover:bg-[#e6b800] text-gray-900 border-b-4 border-yellow-600 hover:border-yellow-700',
    whatsapp: 'bg-[#1da851] hover:bg-[#178c43] text-white border-b-4 border-green-900',
    secondary: 'bg-[#001f5c] hover:bg-[#001744] text-white border border-[#002d80]',
    outline: 'border-2 border-[#ffcc00] text-[#ffcc00] hover:bg-[#ffcc00] hover:text-gray-900'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
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
