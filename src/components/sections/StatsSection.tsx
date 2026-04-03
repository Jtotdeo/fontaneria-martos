"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { useDictionary } from "@/components/DictionaryProvider";

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString("es-ES")}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const { dict } = useDictionary();

  const stats = [
    { value: 20, suffix: "+", label: dict.stats.years },
    { value: 3000, suffix: "+", label: dict.stats.projects },
    { value: 98, suffix: "%", label: dict.stats.satisfaction },
    { value: 24, suffix: "h", label: dict.stats.emergency },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
