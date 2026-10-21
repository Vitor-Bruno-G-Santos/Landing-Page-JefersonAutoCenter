import React from 'react';

export default function MetricCard({ number, label, delay = 0 }) {
  return (
    <div 
      className="reveal-card text-center p-4 bg-[#001f5c] border border-blue-800/70 rounded-2xl shadow-md"
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      <div className="text-2xl md:text-3xl font-black text-[#ffcc00] mb-1">{number}</div>
      <div className="text-sm text-gray-200 font-medium">{label}</div>
    </div>
  );
}
