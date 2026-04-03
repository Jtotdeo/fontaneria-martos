import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import StatsSection from "@/components/sections/StatsSection";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Fontanería Martos | Fontaneros Profesionales en Alicante",
  description:
    "Fontaneros profesionales en Sant Vicent del Raspeig y Alicante. Reparación de fugas, desatascos, instalaciones y reformas. Servicio de urgencias 24h.",
};

export default function HomePage() {
  return (
    <>
      <Hero
        title="Fontaneros de Confianza en Alicante"
        subtitle="Más de 20 años resolviendo problemas de fontanería en Sant Vicent del Raspeig y toda la provincia de Alicante. Servicio profesional, rápido y con garantía."
        ctaText="Pedir Presupuesto Gratis"
        ctaHref="/contacto"
        secondaryCtaText="Ver Nuestros Servicios"
        secondaryCtaHref="/servicios"
      />

      <section className="py-20">
        <ServicesGrid />
      </section>

      <WhyChooseUs />

      <StatsSection />

      <section className="py-20">
        <Testimonials limit={3} />
        <AnimatedSection className="text-center mt-10">
          <a
            href="/reviews"
            className="text-primary-600 font-semibold hover:text-primary-700 underline underline-offset-4"
          >
            Ver todas las reseñas &rarr;
          </a>
        </AnimatedSection>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Zona de Cobertura
              </h2>
              <div className="w-16 h-1 bg-primary-500 rounded mx-auto mb-6" />
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Ofrecemos nuestros servicios de fontanería en Sant Vicent del
                Raspeig y toda la comarca de l&apos;Alacantí, incluyendo
                Alicante, Mutxamel, San Juan, El Campello y alrededores.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="bg-white rounded-2xl shadow-md p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {[
                  "Sant Vicent del Raspeig",
                  "Alicante",
                  "Mutxamel",
                  "San Juan de Alicante",
                  "El Campello",
                  "San Vicente",
                  "Villafranqueza",
                  "Torrellano",
                ].map((city) => (
                  <div
                    key={city}
                    className="py-3 px-4 bg-primary-50 rounded-xl text-primary-700 font-medium"
                  >
                    {city}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner
        title="¿Necesita un Fontanero de Confianza?"
        description="Contacte con nosotros hoy mismo para obtener un presupuesto sin compromiso. Atendemos urgencias las 24 horas."
        buttonText="Contactar Ahora"
        buttonHref="/contacto"
      />
    </>
  );
}
