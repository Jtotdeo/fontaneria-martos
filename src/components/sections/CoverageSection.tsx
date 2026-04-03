"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { useDictionary } from "@/components/DictionaryProvider";

const cities = [
  "Sant Vicent del Raspeig",
  "Alicante",
  "Mutxamel",
  "San Juan de Alicante",
  "El Campello",
  "San Vicente",
  "Villafranqueza",
  "Torrellano",
];

export default function CoverageSection() {
  const { dict } = useDictionary();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{dict.coverage.title}</h2>
            <div className="w-16 h-1 bg-primary-500 rounded mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">{dict.coverage.subtitle}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="bg-white rounded-2xl shadow-md p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {cities.map((city) => (
                <div key={city} className="py-3 px-4 bg-primary-50 rounded-xl text-primary-700 font-medium">{city}</div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
