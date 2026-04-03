import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import StatsSection from "@/components/sections/StatsSection";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";
import CoverageSection from "@/components/sections/CoverageSection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <Hero />
      <section className="py-20">
        <ServicesGrid />
      </section>
      <WhyChooseUs />
      <StatsSection />
      <section className="py-20">
        <Testimonials limit={3} />
      </section>
      <CoverageSection />
      <CTABanner
        title={dict.cta.homeTitle}
        description={dict.cta.homeDesc}
        buttonText={dict.cta.contactNow}
        buttonHref={`/${locale}/contacto`}
      />
    </>
  );
}
