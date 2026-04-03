"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { useDictionary } from "@/components/DictionaryProvider";

export default function Hero() {
  const { dict, locale } = useDictionary();

  return (
    <section className="relative min-h-[600px] flex items-center bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
        >
          {dict.hero.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-primary-100 max-w-3xl mx-auto mb-10"
        >
          {dict.hero.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="secondary" size="lg" href={`/${locale}/contacto`}>
            {dict.hero.cta}
          </Button>
          <Button variant="outline" size="lg" href={`/${locale}/servicios`} className="border-white text-white hover:bg-white/10">
            {dict.hero.secondaryCta}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
