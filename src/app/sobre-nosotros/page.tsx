import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StatsSection from "@/components/sections/StatsSection";
import CTABanner from "@/components/sections/CTABanner";
import { Shield, Heart, Users, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description:
    "Conozca a Fontanería Martos: más de 20 años de experiencia en fontanería profesional en Alicante. Equipo cualificado, servicio de calidad y compromiso con nuestros clientes.",
};

const values = [
  {
    icon: Shield,
    title: "Profesionalidad",
    description:
      "Cada trabajo que realizamos cumple con los más altos estándares de calidad. Nuestros fontaneros están certificados y en formación continua.",
  },
  {
    icon: Heart,
    title: "Compromiso",
    description:
      "Nos comprometemos con cada cliente como si fuera el único. Su satisfacción es nuestra prioridad y trabajamos hasta que el problema quede resuelto.",
  },
  {
    icon: Users,
    title: "Cercanía",
    description:
      "Somos un equipo local que conoce las necesidades de nuestros vecinos. Ofrecemos un trato personal y cercano en cada servicio.",
  },
  {
    icon: Award,
    title: "Garantía",
    description:
      "Todos nuestros trabajos incluyen garantía por escrito. Utilizamos materiales de primera calidad de marcas reconocidas en el sector.",
  },
];

const team = [
  {
    name: "Antonio Martos",
    role: "Fundador y Director Técnico",
    description:
      "Con más de 25 años de experiencia en el sector, Antonio fundó Fontanería Martos con la visión de ofrecer un servicio de fontanería profesional y honesto en Alicante.",
  },
  {
    name: "Miguel Ángel Martos",
    role: "Jefe de Equipo",
    description:
      "Especialista en instalaciones y reformas integrales. Miguel Ángel lidera los proyectos más complejos con precisión y eficiencia.",
  },
  {
    name: "Carlos Hernández",
    role: "Técnico de Urgencias",
    description:
      "Disponible las 24 horas para atender cualquier emergencia de fontanería. Carlos es el responsable de nuestro servicio de respuesta rápida.",
  },
];

export default function SobreNosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Inicio", href: "/" },
              { label: "Sobre Nosotros" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Sobre Nosotros
          </h1>
          <p className="text-primary-100 text-lg max-w-2xl">
            Más de dos décadas de experiencia avalan nuestro compromiso con la
            calidad y la satisfacción del cliente.
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Fontanería Martos nació en el año 2003 en Sant Vicent del
                  Raspeig, cuando Antonio Martos decidió fundar su propia
                  empresa de fontanería tras más de una década trabajando en el
                  sector. Su objetivo era claro: ofrecer un servicio de
                  fontanería profesional, honesto y cercano a sus vecinos.
                </p>
                <p>
                  Lo que comenzó como un pequeño negocio familiar ha crecido
                  hasta convertirse en una de las empresas de fontanería de
                  referencia en la comarca de l&apos;Alacantí. Hoy, nuestro
                  equipo de profesionales cualificados atiende a miles de
                  clientes cada año, desde hogares particulares hasta comunidades
                  de vecinos y negocios.
                </p>
                <p>
                  A lo largo de estos más de 20 años, hemos mantenido los
                  valores que nos definen: trabajo bien hecho, precios justos y
                  transparentes, y un trato personal con cada cliente. Nos
                  orgullece que la mayoría de nuestros nuevos clientes llegan
                  recomendados por otros clientes satisfechos.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl aspect-[4/3] flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-primary-700 text-6xl font-bold mb-2">20+</p>
                  <p className="text-primary-600 text-xl font-medium">
                    Años de Experiencia
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Misión */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <SectionHeading
                title="Nuestra Misión"
                subtitle="Ser la empresa de fontanería de referencia en Alicante, ofreciendo soluciones profesionales, rápidas y duraderas que superen las expectativas de nuestros clientes."
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Nuestro Equipo"
            subtitle="Profesionales cualificados y comprometidos con la excelencia"
          />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.15}>
                <div className="bg-white rounded-2xl shadow-md p-8 text-center">
                  <div className="w-24 h-24 bg-primary-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-primary-600 text-3xl font-bold">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Nuestros Valores"
            subtitle="Los principios que guían cada trabajo que realizamos"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certificaciones */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Certificaciones y Garantías"
            subtitle="Profesionalidad acreditada y respaldada"
          />
          <AnimatedSection>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Instalador Autorizado",
                  desc: "Empresa registrada como instalador autorizado en la Comunidad Valenciana. Carné profesional de instalador en vigor.",
                },
                {
                  title: "Seguro de Responsabilidad Civil",
                  desc: "Contamos con seguro de responsabilidad civil que cubre todos nuestros trabajos, para su total tranquilidad.",
                },
                {
                  title: "Garantía por Escrito",
                  desc: "Todos nuestros trabajos incluyen garantía por escrito. Materiales de primeras marcas con garantía del fabricante.",
                },
              ].map((cert) => (
                <div
                  key={cert.title}
                  className="bg-white border border-gray-200 rounded-2xl p-8 text-center"
                >
                  <Award className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600">{cert.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <StatsSection />

      <CTABanner
        title="¿Necesita un Fontanero Profesional?"
        description="Contacte con nosotros para un presupuesto sin compromiso. Estamos a su disposición."
        buttonText="Contactar Ahora"
        buttonHref="/contacto"
      />
    </>
  );
}
