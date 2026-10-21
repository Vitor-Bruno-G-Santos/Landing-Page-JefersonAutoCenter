import React from 'react';
import StarRating from '../atoms/StarRating';

export default function TestimonialCard({
  name,
  role,
  date,
  comment,
  avatar,
  avatarColor = 'bg-blue-600',
  rating = 5
}) {
  const initials = (name || '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <div className="bg-[#001f5c] p-6 rounded-2xl border border-blue-800/80 shadow-xl flex flex-col justify-between hover:border-blue-600 transition-colors">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div
            className={`w-11 h-11 rounded-full ${avatarColor} text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-inner ring-2 ring-white/15`}
          >
            {avatar ? (
              <img src={avatar} alt={name} className="w-full h-full rounded-full object-cover" />
            ) : (
              initials
            )}
          </div>
          <div>
            <h3 className="font-bold text-white text-base leading-tight">{name}</h3>
            <p className="text-sm text-gray-300 mt-0.5">{role}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <StarRating count={rating} />
          {date && <span className="text-sm text-gray-300">• {date}</span>}
        </div>

        <p className="text-gray-100 text-base leading-relaxed">
          “{comment}”
        </p>
      </div>
    </div>
  );
}

