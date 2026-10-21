import React from 'react';
import MetricCard from '../molecules/MetricCard';

export default function MetricsBarOrganism({ metrics = [] }) {
  if (!metrics || metrics.length === 0) return null;

  return (
    <section aria-label="Indicadores da oficina" className="bg-[#001744] py-8 px-4 border-t border-b border-blue-900/60">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, idx) => (
          <MetricCard key={idx} number={metric.number} label={metric.label} />
        ))}
      </div>
    </section>
  );
}
