"use client";
import React, { useState } from 'react';
import WhatsAppModal from '../molecules/WhatsAppModal';
import Button from '../atoms/Button';
import WhatsAppIcon from '../atoms/WhatsAppIcon';

/**
 * Organism that renders a trigger button (or any element) and opens a modal
 * allowing the user to choose which unit's WhatsApp to open.
 * Props:
 *   units: array of unit objects (must contain `name` and `whatsapp`)
 *   buttonLabel: text for the trigger button
 *   variant: optional styling variant for the button (e.g., "primary" or "floating")
 */
export default function WhatsAppModalOrganism({
  units = [],
  buttonLabel = 'Falar no WhatsApp',
  variant = 'primary',
  size = 'sm',
  className = '',
  iconClassName = 'w-4 h-4 mr-2'
}) {
  const [open, setOpen] = useState(false);

  const handleSelect = (url) => {
    window.open(url, '_blank');
    setOpen(false);
  };

  // Choose button styling based on variant
  const buttonProps = {};
  if (variant === 'floating') {
    buttonProps.className = "fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba59] text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center justify-center border-2 border-white cursor-pointer";
  }

  return (
    <>
      {variant === 'floating' ? (
        <button type="button" onClick={() => setOpen(true)} {...buttonProps} aria-label={buttonLabel}>
          <WhatsAppIcon className="w-5 h-5" />
        </button>
      ) : (
        <Button type="button" onClick={() => setOpen(true)} variant={variant} size={size} className={className}>
          <WhatsAppIcon className={iconClassName} />
          {buttonLabel}
        </Button>
      )}
      {open && <WhatsAppModal units={units} onSelect={handleSelect} onClose={() => setOpen(false)} />}
    </>
  );
}

