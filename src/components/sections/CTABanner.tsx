"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

interface CTABannerProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export default function CTABanner({
  title,
  description,
  buttonText,
  buttonHref,
}: CTABannerProps) {
  return (
    <section className="bg-primary-600 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <Button variant="secondary" size="lg" href={buttonHref}>
            {buttonText}
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
