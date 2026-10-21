import React from 'react';
import StarRating from '../atoms/StarRating';

export default function TestimonialCard({
  name,
  role = 'Avaliação no Google',
  comment,
  rating = 5
}) {
  return (
    <div className="h-full bg-[#001f5c] p-6 rounded-2xl border border-blue-800/80 shadow-xl flex flex-col justify-between hover:border-[#ffcc00]/50 transition-all select-none">
      <div>
        <div className="mb-4">
          <h3 className="font-bold text-white text-base leading-tight">{name}</h3>
          <p className="text-xs text-gray-300 mt-0.5">{role}</p>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <StarRating count={rating} />
        </div>

        <p className="text-gray-100 text-sm md:text-base leading-relaxed">
          “{comment}”
        </p>
      </div>
    </div>
  );
}

