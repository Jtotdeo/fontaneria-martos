"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StarRating from "@/components/ui/StarRating";
import { reviews } from "@/lib/data/reviews";

interface TestimonialsProps {
  limit?: number;
}

export default function Testimonials({ limit = 3 }: TestimonialsProps) {
  const displayedReviews = reviews.slice(0, limit);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        title="Lo Que Dicen Nuestros Clientes"
        subtitle="La satisfacción de nuestros clientes es nuestra mejor garantía"
      />
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {displayedReviews.map((review, i) => (
          <AnimatedSection key={review.name} delay={i * 0.15}>
            <div className="bg-white border border-gray-100 rounded-2xl p-8 h-full shadow-sm">
              <StarRating rating={review.rating} />
              <p className="text-gray-700 mt-4 mb-6 leading-relaxed text-sm">
                &ldquo;{review.text}&rdquo;
              </p>
              <div>
                <p className="font-bold text-gray-900">{review.name}</p>
                <p className="text-gray-500 text-sm">{review.location}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
