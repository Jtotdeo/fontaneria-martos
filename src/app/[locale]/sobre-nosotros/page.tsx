"use client";

import { useDictionary } from "@/components/DictionaryProvider";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StatsSection from "@/components/sections/StatsSection";
import CTABanner from "@/components/sections/CTABanner";
import { Shield, Heart, Users, Award } from "lucide-react";

const valueIcons = [Shield, Heart, Users, Award];

export default function SobreNosotrosPage() {
  const { dict, locale } = useDictionary();
  const t = dict.about;

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: dict.common.home, href: `/${locale}` }, { label: t.pageTitle }]} />
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">{t.pageTitle}</h1>
          <p className="text-primary-100 text-lg max-w-2xl">{t.pageSubtitle}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.historyTitle}</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{t.historyP1}</p><p>{t.historyP2}</p><p>{t.historyP3}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl aspect-[4/3] flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-primary-700 text-6xl font-bold mb-2">20+</p>
                  <p className="text-primary-600 text-xl font-medium">{t.yearsExperience}</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection><div className="max-w-3xl mx-auto text-center"><SectionHeading title={t.missionTitle} subtitle={t.missionText} /></div></AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t.teamTitle} subtitle={t.teamSubtitle} />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {t.team.map((m: { name: string; role: string; desc: string }, i: number) => (
              <AnimatedSection key={m.name} delay={i * 0.15}>
                <div className="bg-white rounded-2xl shadow-md p-8 text-center">
                  <div className="w-24 h-24 bg-primary-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-primary-600 text-3xl font-bold">{m.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{m.name}</h3>
                  <p className="text-primary-600 font-medium mb-4">{m.role}</p>
                  <p className="text-gray-600">{m.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t.valuesTitle} subtitle={t.valuesSubtitle} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {t.values.map((v: { title: string; desc: string }, i: number) => {
              const Icon = valueIcons[i];
              return (
                <AnimatedSection key={v.title} delay={i * 0.1}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center"><Icon className="w-8 h-8 text-primary-600" /></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                    <p className="text-gray-600">{v.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t.certsTitle} subtitle={t.certsSubtitle} />
          <AnimatedSection>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {t.certs.map((c: { title: string; desc: string }) => (
                <div key={c.title} className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
                  <Award className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{c.title}</h3>
                  <p className="text-gray-600">{c.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <StatsSection />
      <CTABanner title={dict.cta.homeTitle} description={dict.cta.homeDesc} buttonText={dict.cta.contactNow} buttonHref={`/${locale}/contacto`} />
    </>
  );
}
