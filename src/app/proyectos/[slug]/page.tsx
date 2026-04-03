import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTABanner from "@/components/sections/CTABanner";
import { projects } from "@/lib/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const project = projects.find((p) => p.slug === slug);
    if (!project) return { title: "Proyecto no encontrado" };
    return {
      title: project.title,
      description: project.shortDescription,
    };
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Inicio", href: "/" },
              { label: "Proyectos", href: "/proyectos" },
              { label: project.title },
            ]}
          />
          <div className="mt-4">
            <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full">
              {project.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            {project.title}
          </h1>
          <p className="text-primary-100 text-lg max-w-2xl">
            {project.shortDescription}
          </p>
        </div>
      </section>

      {/* Galería placeholder */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: project.images }).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center"
              >
                <span className="text-gray-400 text-sm">Foto {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <AnimatedSection>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Descripción del Proyecto
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-red-50 rounded-2xl p-6">
                    <h3 className="font-bold text-red-700 mb-2">El Reto</h3>
                    <p className="text-gray-700 text-sm">{project.challenge}</p>
                  </div>
                  <div className="bg-blue-50 rounded-2xl p-6">
                    <h3 className="font-bold text-blue-700 mb-2">
                      La Solución
                    </h3>
                    <p className="text-gray-700 text-sm">{project.solution}</p>
                  </div>
                  <div className="bg-green-50 rounded-2xl p-6">
                    <h3 className="font-bold text-green-700 mb-2">
                      El Resultado
                    </h3>
                    <p className="text-gray-700 text-sm">{project.result}</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar specs */}
            <div>
              <AnimatedSection delay={0.2}>
                <div className="bg-gray-50 rounded-2xl p-8 sticky top-24">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Ficha Técnica
                  </h3>
                  <dl className="space-y-4">
                    {project.specs.map((spec) => (
                      <div key={spec.label}>
                        <dt className="text-sm text-gray-500">{spec.label}</dt>
                        <dd className="font-medium text-gray-900">
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-8">
                    <Link
                      href="/contacto"
                      className="block w-full bg-primary-500 hover:bg-primary-600 text-white text-center py-3 rounded-xl font-semibold transition-colors"
                    >
                      Proyecto Similar? Contáctenos
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="¿Le Gustaría un Resultado Similar?"
        description="Contacte con nosotros y le ayudaremos a planificar su proyecto con un presupuesto sin compromiso."
        buttonText="Solicitar Presupuesto"
        buttonHref="/contacto"
      />
    </>
  );
}
