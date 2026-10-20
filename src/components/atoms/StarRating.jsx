import React from 'react';
import { Star } from 'lucide-react';

export default function StarRating({ count = 5 }) {
  return (
    <div className="flex items-center gap-1 text-[#ffcc00]">
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-current" />
      ))}
    </div>
  );
}
