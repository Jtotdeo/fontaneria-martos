"use client";

import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { useDictionary } from "@/components/DictionaryProvider";
import { Droplets, Wrench, Pipette, Flame, Bath } from "lucide-react";
import type { ElementType } from "react";

const serviceKeys = [
  { slug: "reparacion-de-fugas", icon: "Droplets" },
  { slug: "instalacion-de-fontaneria", icon: "Wrench" },
  { slug: "desatascos", icon: "Pipette" },
  { slug: "calentadores-y-calderas", icon: "Flame" },
  { slug: "reformas-de-banos", icon: "Bath" },
];

const iconMap: Record<string, ElementType> = { Droplets, Wrench, Pipette, Flame, Bath };

export default function ServicesGrid() {
  const { dict, locale } = useDictionary();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title={dict.services.title} subtitle={dict.services.subtitle} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {serviceKeys.map((svc, i) => {
          const IconComponent = iconMap[svc.icon];
          const item = dict.services.items[svc.slug];
          return (
            <AnimatedSection key={svc.slug} delay={i * 0.1}>
              <Link href={`/${locale}/servicios/${svc.slug}`}>
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 h-full group border border-gray-100">
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors">
                    {IconComponent && <IconComponent className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">{item?.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{item?.shortDesc}</p>
                  <span className="text-primary-600 font-semibold text-sm group-hover:underline">{dict.services.learnMore} &rarr;</span>
                </div>
              </Link>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  );
}
