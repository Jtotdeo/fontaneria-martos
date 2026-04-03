"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Shield, Clock, ThumbsUp, Euro } from "lucide-react";

const usps = [
  {
    icon: Shield,
    title: "Profesionales Certificados",
    description:
      "Todos nuestros fontaneros cuentan con el carné de instalador autorizado y seguro de responsabilidad civil. Formación continua y certificaciones actualizadas.",
  },
  {
    icon: Clock,
    title: "Servicio Rápido",
    description:
      "Respuesta inmediata para urgencias las 24 horas del día. En situaciones normales, acudimos en menos de 24 horas. Su tiempo es importante para nosotros.",
  },
  {
    icon: ThumbsUp,
    title: "Garantía de Satisfacción",
    description:
      "Garantía por escrito en todos nuestros trabajos. Utilizamos materiales de primeras marcas y nos aseguramos de que el resultado sea perfecto.",
  },
  {
    icon: Euro,
    title: "Presupuesto Sin Compromiso",
    description:
      "Presupuestos gratuitos y transparentes. Sin sorpresas ni costes ocultos. Le explicamos cada detalle del trabajo y su coste antes de empezar.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="¿Por Qué Elegir Fontanería Martos?"
          subtitle="Más de 20 años nos avalan como referentes en fontanería profesional en Alicante"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {usps.map((usp, i) => (
            <AnimatedSection key={usp.title} delay={i * 0.1}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <usp.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {usp.title}
                </h3>
                <p className="text-gray-600 text-sm">{usp.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
