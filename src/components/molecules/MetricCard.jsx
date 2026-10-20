import React from 'react';

export default function MetricCard({ number, label }) {
  return (
    <div className="text-center p-4 bg-[#001f5c]/50 border border-blue-900/40 rounded-xl">
      <div className="text-3xl md:text-4xl font-black text-[#ffcc00] mb-1">{number}</div>
      <div className="text-xs md:text-sm text-gray-300 font-medium">{label}</div>
    </div>
  );
}
