import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/sections/CTABanner";
import { services } from "@/lib/data/services";
import { CheckCircle } from "lucide-react";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const service = services.find((s) => s.slug === slug);
    if (!service) return { title: "Servicio no encontrado" };
    return {
      title: service.title,
      description: service.shortDescription,
    };
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedServices = services.filter((s) =>
    service.relatedSlugs.includes(s.slug)
  );

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Inicio", href: "/" },
              { label: "Servicios", href: "/servicios" },
              { label: service.title },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            {service.title}
          </h1>
          <p className="text-primary-100 text-lg max-w-2xl">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* Descripción */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                  {service.description.split("\n\n").map((p, i) => (
                    <p key={i} className="mb-4">
                      {p}
                    </p>
                  ))}
                </div>
              </AnimatedSection>

              {/* Proceso */}
              <AnimatedSection delay={0.2}>
                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-8">
                  Nuestro Proceso de Trabajo
                </h2>
                <div className="space-y-6">
                  {service.process.map((step) => (
                    <div key={step.step} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">
                          {step.title}
                        </h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div>
              <AnimatedSection delay={0.1}>
                <div className="bg-primary-50 rounded-2xl p-8 sticky top-24">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Ventajas
                  </h3>
                  <ul className="space-y-3">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link
                      href="/contacto"
                      className="block w-full bg-primary-500 hover:bg-primary-600 text-white text-center py-3 rounded-xl font-semibold transition-colors"
                    >
                      Pedir Presupuesto
                    </Link>
                  </div>
                  <div className="mt-4">
                    <a
                      href="tel:+34966123456"
                      className="block w-full border-2 border-primary-500 text-primary-600 text-center py-3 rounded-xl font-semibold hover:bg-primary-50 transition-colors"
                    >
                      Llamar: +34 966 123 456
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
              Preguntas Frecuentes
            </h2>
            <div className="w-16 h-1 bg-primary-500 rounded mx-auto mb-10" />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <FAQAccordion items={service.faq} />
          </AnimatedSection>
        </div>
      </section>

      {/* Servicios relacionados */}
      {relatedServices.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
              Servicios Relacionados
            </h2>
            <div className="w-16 h-1 bg-primary-500 rounded mx-auto mb-10" />
            <div className="grid md:grid-cols-3 gap-8">
              {relatedServices.map((rs) => (
                <Link key={rs.slug} href={`/servicios/${rs.slug}`}>
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-8 group">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                      {rs.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {rs.shortDescription}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        title={`¿Necesita ${service.title}?`}
        description="Contacte con nosotros hoy mismo. Presupuesto sin compromiso y atención personalizada."
        buttonText="Solicitar Presupuesto"
        buttonHref="/contacto"
      />
    </>
  );
}
