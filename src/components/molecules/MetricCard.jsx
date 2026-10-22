"use client";
import React, { useState, useEffect, useRef } from 'react';

// Ease Out Expo: sobe muito rápido no início e desacelera gradualmente ao se aproximar do fim
function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function parseMetric(str) {
  if (typeof str !== 'string') return { prefix: '', target: 0, decimals: 0, suffix: '' };

  const match = str.match(/^([^\d]*)([\d.,]+)(.*)$/);
  if (!match) {
    return { prefix: '', target: 0, decimals: 0, suffix: str };
  }

  const prefix = match[1];
  const numStr = match[2];
  const suffix = match[3];

  // Caso especial: número formatado com ponto de milhar brasileiro (ex: "+12.000")
  if (/^\d{1,3}(\.\d{3})+$/.test(numStr)) {
    const rawVal = parseFloat(numStr.replace(/\./g, ''));
    return { prefix, target: rawVal, decimals: 0, useThousandsDot: true, suffix };
  }

  // Caso especial: número com decimal (ex: "4.7" ou "4,7")
  if (numStr.includes('.') || numStr.includes(',')) {
    const isComma = numStr.includes(',');
    const normalized = numStr.replace(',', '.');
    const parts = normalized.split('.');
    const decimals = parts[1] ? parts[1].length : 0;
    return { prefix, target: parseFloat(normalized), decimals, decimalChar: isComma ? ',' : '.', suffix };
  }

  // Inteiro comum (ex: "+17 anos", "2 unidades")
  return { prefix, target: parseInt(numStr, 10), decimals: 0, suffix };
}

function formatMetric(current, meta) {
  if (meta.target === undefined) return meta.suffix || '';

  let formattedNum = '';
  if (meta.useThousandsDot) {
    formattedNum = Math.round(current).toLocaleString('pt-BR');
  } else if (meta.decimals > 0) {
    const fixed = current.toFixed(meta.decimals);
    formattedNum = meta.decimalChar === ',' ? fixed.replace('.', ',') : fixed;
  } else {
    formattedNum = Math.round(current).toString();
  }

  return `${meta.prefix}${formattedNum}${meta.suffix}`;
}

export default function MetricCard({ number, label, delay = 0 }) {
  const [displayValue, setDisplayValue] = useState(number);
  const cardRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    // Respeita acessibilidade (prefers-reduced-motion)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayValue(number);
      return;
    }

    const meta = parseMetric(number);
    if (!meta.target || isNaN(meta.target)) {
      setDisplayValue(number);
      return;
    }

    const el = cardRef.current;
    if (!el) return;

    const startAnimation = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;

      // Inicia em zero com prefixo e sufixo
      setDisplayValue(formatMetric(0, meta));

      const duration = 1800; // 1.8 segundos
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutExpo(progress);

        const currentVal = easedProgress * meta.target;
        setDisplayValue(formatMetric(currentVal, meta));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          // Garante o valor final exato
          setDisplayValue(number);
        }
      };

      requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              setTimeout(startAnimation, delay);
            } else {
              startAnimation();
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [number, delay]);

  return (
    <div 
      ref={cardRef}
      className="reveal-card text-center p-4 bg-[#001f5c] border border-blue-800/70 rounded-md shadow-md"
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      <div className="text-2xl md:text-3xl font-black text-[#ffcc00] mb-1 tabular-nums">
        {displayValue}
      </div>
      <div className="text-sm text-gray-200 font-medium">{label}</div>
    </div>
  );
}
