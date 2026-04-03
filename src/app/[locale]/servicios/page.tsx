"use client";

import Link from "next/link";
import { useDictionary } from "@/components/DictionaryProvider";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTABanner from "@/components/sections/CTABanner";
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

export default function ServiciosPage() {
  const { dict, locale } = useDictionary();

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: dict.common.home, href: `/${locale}` }, { label: dict.nav.services }]} />
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">{dict.services.title}</h1>
          <p className="text-primary-100 text-lg max-w-2xl">{dict.services.subtitle}</p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={dict.services.title} subtitle={dict.services.subtitle} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {serviceKeys.map((svc, i) => {
              const Icon = iconMap[svc.icon];
              const item = dict.services.items[svc.slug];
              return (
                <AnimatedSection key={svc.slug} delay={i * 0.1}>
                  <Link href={`/${locale}/servicios/${svc.slug}`}>
                    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 h-full group">
                      <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors">
                        {Icon && <Icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">{item?.title}</h3>
                      <p className="text-gray-600 mb-4">{item?.shortDesc}</p>
                      <span className="text-primary-600 font-semibold group-hover:underline">{dict.services.learnMore} &rarr;</span>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
      <CTABanner title={dict.cta.homeTitle} description={dict.cta.homeDesc} buttonText={dict.cta.requestQuote} buttonHref={`/${locale}/contacto`} />
    </>
  );
}
