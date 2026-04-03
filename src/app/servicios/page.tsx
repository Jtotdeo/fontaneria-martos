import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTABanner from "@/components/sections/CTABanner";
import { services } from "@/lib/data/services";
import { Droplets, Wrench, Pipette, Flame, Bath } from "lucide-react";
import type { ElementType } from "react";

export const metadata: Metadata = {
  title: "Servicios de Fontanería",
  description:
    "Servicios profesionales de fontanería en Alicante: reparación de fugas, desatascos, instalaciones, calentadores y reformas de baños. Presupuesto sin compromiso.",
};

const iconMap: Record<string, ElementType> = {
  Droplets,
  Wrench,
  Pipette,
  Flame,
  Bath,
};

export default function ServiciosPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Inicio", href: "/" },
              { label: "Servicios" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-primary-100 text-lg max-w-2xl">
            Soluciones profesionales de fontanería para hogares, comunidades y
            negocios en toda la provincia de Alicante.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Todos Nuestros Servicios"
            subtitle="Desde reparaciones urgentes hasta reformas integrales, cubrimos todas las necesidades de fontanería"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, i) => {
              const IconComponent = iconMap[service.icon];
              return (
                <AnimatedSection key={service.slug} delay={i * 0.1}>
                  <Link href={`/servicios/${service.slug}`}>
                    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 h-full group">
                      <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors">
                        {IconComponent && (
                          <IconComponent className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {service.shortDescription}
                      </p>
                      <div className="mt-auto">
                        <span className="text-primary-600 font-semibold group-hover:underline">
                          Más información &rarr;
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner
        title="¿Necesita Ayuda con su Fontanería?"
        description="Llámenos o solicite un presupuesto online. Respuesta rápida garantizada."
        buttonText="Pedir Presupuesto"
        buttonHref="/contacto"
      />
    </>
  );
}
