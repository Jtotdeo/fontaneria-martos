import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StarRating from "@/components/ui/StarRating";
import CTABanner from "@/components/sections/CTABanner";
import { reviews } from "@/lib/data/reviews";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Reseñas de Clientes",
  description:
    "Lea las opiniones de nuestros clientes sobre Fontanería Martos. Más del 98% de satisfacción en todos nuestros trabajos de fontanería en Alicante.",
};

export default function ReviewsPage() {
  const avgRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Inicio", href: "/" },
              { label: "Reseñas" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Reseñas de Clientes
          </h1>
          <p className="text-primary-100 text-lg max-w-2xl">
            La opinión de nuestros clientes es nuestra mejor carta de
            presentación. Esto es lo que dicen sobre nuestro trabajo.
          </p>
        </div>
      </section>

      {/* Resumen */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col md:flex-row items-center gap-8 justify-center">
              <div className="text-center">
                <p className="text-5xl font-bold text-primary-600">
                  {avgRating.toFixed(1)}
                </p>
                <div className="mt-2">
                  <StarRating rating={Math.round(avgRating)} />
                </div>
                <p className="text-gray-500 mt-1">
                  {reviews.length} reseñas
                </p>
              </div>
              <div className="h-16 w-px bg-gray-200 hidden md:block" />
              <div className="text-center md:text-left">
                <p className="text-gray-700 text-lg">
                  Valoración media de nuestros clientes
                </p>
                <a
                  href="#"
                  className="text-primary-600 font-medium inline-flex items-center gap-1 mt-1 hover:underline"
                >
                  Ver en Google Reviews{" "}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Reseñas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review, i) => (
              <AnimatedSection key={review.name} delay={i * 0.08}>
                <div className="bg-white border border-gray-100 rounded-2xl p-8 h-full">
                  <StarRating rating={review.rating} />
                  <p className="text-gray-700 mt-4 mb-6 leading-relaxed">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-gray-900">{review.name}</p>
                      <p className="text-gray-500 text-sm">
                        {review.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 text-sm">{review.date}</p>
                      <p className="text-primary-600 text-xs font-medium">
                        {review.service}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="¿Quiere Ser Nuestro Próximo Cliente Satisfecho?"
        description="Contacte con nosotros y descubra por qué nuestros clientes nos recomiendan."
        buttonText="Contactar Ahora"
        buttonHref="/contacto"
      />
    </>
  );
}
