"use client";

import { useState, useMemo } from "react";
import { useDictionary } from "@/components/DictionaryProvider";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/sections/CTABanner";
import { faqItems } from "@/lib/data/faq";
import { Search } from "lucide-react";

export default function FAQPage() {
  const { dict, locale } = useDictionary();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(dict.faqPage.all);

  const categories = [
    dict.faqPage.all,
    ...Array.from(new Set(faqItems.map((f) => f.category))),
  ];

  const filtered = useMemo(() => {
    let items = faqItems;
    if (activeCategory !== dict.faqPage.all) {
      items = items.filter((f) => f.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(
        (f) =>
          f.question.toLowerCase().includes(q) ||
          f.answer.toLowerCase().includes(q)
      );
    }
    return items;
  }, [search, activeCategory, dict.faqPage.all]);

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: dict.common.home, href: `/${locale}` },
              { label: dict.faqPage.pageTitle },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            {dict.faqPage.pageTitle}
          </h1>
          <p className="text-primary-100 text-lg max-w-2xl">
            {dict.faqPage.pageSubtitle}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Busqueda */}
          <AnimatedSection>
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder={dict.faqPage.search}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
              />
            </div>
          </AnimatedSection>

          {/* Categorias */}
          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-primary-500 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* FAQ */}
          <AnimatedSection delay={0.2}>
            {filtered.length > 0 ? (
              <FAQAccordion items={filtered} />
            ) : (
              <div className="text-center py-12 text-gray-500">
                <p>{dict.faqPage.noResults}</p>
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>

      <CTABanner
        title={dict.faqPage.ctaTitle}
        description={dict.faqPage.ctaDesc}
        buttonText={dict.cta.contactNow}
        buttonHref={`/${locale}/contacto`}
      />
    </>
  );
}
