"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StarRating from "@/components/ui/StarRating";
import { useDictionary } from "@/components/DictionaryProvider";
import { reviews } from "@/lib/data/reviews";
import Link from "next/link";

interface TestimonialsProps {
  limit?: number;
}

export default function Testimonials({ limit = 3 }: TestimonialsProps) {
  const { dict, locale } = useDictionary();
  const displayedReviews = reviews.slice(0, limit);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title={dict.testimonials.title} subtitle={dict.testimonials.subtitle} />
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {displayedReviews.map((review, i) => (
          <AnimatedSection key={review.name} delay={i * 0.15}>
            <div className="bg-white border border-gray-100 rounded-2xl p-8 h-full shadow-sm">
              <StarRating rating={review.rating} />
              <p className="text-gray-700 mt-4 mb-6 leading-relaxed text-sm">&ldquo;{review.text}&rdquo;</p>
              <div>
                <p className="font-bold text-gray-900">{review.name}</p>
                <p className="text-gray-500 text-sm">{review.location}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
      {limit < reviews.length && (
        <AnimatedSection className="text-center mt-10">
          <Link href={`/${locale}/reviews`} className="text-primary-600 font-semibold hover:text-primary-700 underline underline-offset-4">
            {dict.testimonials.viewAll} &rarr;
          </Link>
        </AnimatedSection>
      )}
    </div>
  );
}
