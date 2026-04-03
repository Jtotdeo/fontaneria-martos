"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useDictionary } from "@/components/DictionaryProvider";
import { Shield, Clock, ThumbsUp, Euro } from "lucide-react";

const icons = [Shield, Clock, ThumbsUp, Euro];

export default function WhyChooseUs() {
  const { dict } = useDictionary();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={dict.whyChooseUs.title} subtitle={dict.whyChooseUs.subtitle} />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {dict.whyChooseUs.items.map((item: { title: string; desc: string }, i: number) => {
            const Icon = icons[i];
            return (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
