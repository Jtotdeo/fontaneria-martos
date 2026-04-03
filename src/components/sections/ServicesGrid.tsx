"use client";

import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/lib/data/services";
import { Droplets, Wrench, Pipette, Flame, Bath } from "lucide-react";
import type { ElementType } from "react";

const iconMap: Record<string, ElementType> = {
  Droplets,
  Wrench,
  Pipette,
  Flame,
  Bath,
};

export default function ServicesGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        title="Nuestros Servicios"
        subtitle="Soluciones profesionales de fontanería para cada necesidad"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {services.map((service, i) => {
          const IconComponent = iconMap[service.icon];
          return (
            <AnimatedSection key={service.slug} delay={i * 0.1}>
              <Link href={`/servicios/${service.slug}`}>
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 h-full group border border-gray-100">
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors">
                    {IconComponent && (
                      <IconComponent className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {service.shortDescription}
                  </p>
                  <span className="text-primary-600 font-semibold text-sm group-hover:underline">
                    Más información &rarr;
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  );
}
