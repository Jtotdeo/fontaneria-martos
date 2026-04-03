"use client";

import { useState } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTABanner from "@/components/sections/CTABanner";
import { projects } from "@/lib/data/projects";

const categories = ["Todos", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function ProyectosPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Inicio", href: "/" },
              { label: "Proyectos" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Nuestros Proyectos
          </h1>
          <p className="text-primary-100 text-lg max-w-2xl">
            Descubra algunos de los trabajos que hemos realizado para nuestros
            clientes. Cada proyecto refleja nuestra dedicación a la calidad.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filtros */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <AnimatedSection key={project.slug} delay={i * 0.1}>
                <Link href={`/proyectos/${project.slug}`}>
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden group">
                    <div className="aspect-[16/10] bg-gradient-to-br from-primary-200 to-primary-400 flex items-center justify-center">
                      <span className="text-primary-700 text-6xl font-bold opacity-30">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2 group-hover:text-primary-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {project.shortDescription}
                      </p>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="¿Tiene un Proyecto en Mente?"
        description="Cuéntenos qué necesita y le preparamos un presupuesto personalizado sin compromiso."
        buttonText="Solicitar Presupuesto"
        buttonHref="/contacto"
      />
    </>
  );
}
