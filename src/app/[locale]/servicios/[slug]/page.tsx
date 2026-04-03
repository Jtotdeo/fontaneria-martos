"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useDictionary } from "@/components/DictionaryProvider";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/sections/CTABanner";
import { CheckCircle } from "lucide-react";

const relatedMap: Record<string, string[]> = {
  "reparacion-de-fugas": ["desatascos", "reformas-de-banos", "instalacion-de-fontaneria"],
  "instalacion-de-fontaneria": ["reparacion-de-fugas", "calentadores-y-calderas"],
  "desatascos": ["reparacion-de-fugas", "instalacion-de-fontaneria"],
  "calentadores-y-calderas": ["instalacion-de-fontaneria", "reparacion-de-fugas"],
  "reformas-de-banos": ["instalacion-de-fontaneria", "reparacion-de-fugas"],
};

export default function ServiceDetailPage() {
  const { slug } = useParams() as { slug: string };
  const { dict, locale } = useDictionary();
  const service = dict.services.items[slug];
  if (!service) return <div className="min-h-[60vh] flex items-center justify-center"><p className="text-gray-500">Service not found</p></div>;

  const faqItems = (service.faq || []).map((f: { q: string; a: string }) => ({ question: f.q, answer: f.a }));
  const relatedSlugs = relatedMap[slug] || [];

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: dict.common.home, href: `/${locale}` }, { label: dict.nav.services, href: `/${locale}/servicios` }, { label: service.title }]} />
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">{service.title}</h1>
          <p className="text-primary-100 text-lg max-w-2xl">{service.shortDesc}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div className="text-gray-600 leading-relaxed">
                  {service.description.split("\n\n").map((p: string, i: number) => <p key={i} className="mb-4">{p}</p>)}
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-8">{dict.services.process}</h2>
                <div className="space-y-6">
                  {(service.process || []).map((s: { step: number; title: string; desc: string }) => (
                    <div key={s.step} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">{s.step}</div>
                      <div><h3 className="font-bold text-gray-900 mb-1">{s.title}</h3><p className="text-gray-600">{s.desc}</p></div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
            <div>
              <AnimatedSection delay={0.1}>
                <div className="bg-primary-50 rounded-2xl p-8 sticky top-24">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">{dict.services.benefits}</h3>
                  <ul className="space-y-3">
                    {(service.benefits || []).map((b: string) => (
                      <li key={b} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" /><span className="text-gray-700">{b}</span></li>
                    ))}
                  </ul>
                  <div className="mt-8"><Link href={`/${locale}/contacto`} className="block w-full bg-primary-500 hover:bg-primary-600 text-white text-center py-3 rounded-xl font-semibold transition-colors">{dict.services.requestQuote}</Link></div>
                  <div className="mt-4"><a href="tel:+34966123456" className="block w-full border-2 border-primary-500 text-primary-600 text-center py-3 rounded-xl font-semibold">{dict.services.callPrice}</a></div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {faqItems.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">{dict.services.faq}</h2>
            <div className="w-16 h-1 bg-primary-500 rounded mx-auto mb-10" />
            <FAQAccordion items={faqItems} />
          </div>
        </section>
      )}

      {relatedSlugs.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">{dict.services.related}</h2>
            <div className="w-16 h-1 bg-primary-500 rounded mx-auto mb-10" />
            <div className="grid md:grid-cols-3 gap-8">
              {relatedSlugs.map((rs) => {
                const r = dict.services.items[rs];
                return r ? (
                  <Link key={rs} href={`/${locale}/servicios/${rs}`}>
                    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-8 group">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 mb-2">{r.title}</h3>
                      <p className="text-gray-600 text-sm">{r.shortDesc}</p>
                    </div>
                  </Link>
                ) : null;
              })}
            </div>
          </div>
        </section>
      )}

      <CTABanner title={service.title} description={dict.cta.homeDesc} buttonText={dict.cta.requestQuote} buttonHref={`/${locale}/contacto`} />
    </>
  );
}
