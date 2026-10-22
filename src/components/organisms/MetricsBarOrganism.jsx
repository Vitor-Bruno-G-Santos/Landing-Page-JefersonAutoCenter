"use client";
import React from 'react';
import MetricCard from '../molecules/MetricCard';

export default function MetricsBarOrganism({ metrics = [] }) {
  if (!metrics || metrics.length === 0) return null;

  return (
    <section aria-label="Indicadores da oficina" className="bg-gradient-to-b from-[#001f5c] to-[#001744] py-8 px-4 section-divider-top section-divider-bottom">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, idx) => (
          <MetricCard key={idx} number={metric.number} label={metric.label} delay={idx * 100} />
        ))}
      </div>
    </section>
  );
}
