"use client";

import { useDictionary } from "@/components/DictionaryProvider";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export default function VoorwaardenPage() {
  const { dict, locale } = useDictionary();

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: dict.common.home, href: `/${locale}` }, { label: dict.footer.terms }]} />
          <h1 className="text-4xl md:text-5xl font-bold mt-4">{dict.footer.terms}</h1>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <p className="text-gray-500 text-sm mb-8">Ultima actualizacion: enero 2025</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Identificacion</h2>
          <p className="text-gray-600 mb-6">Fontaneria Martos, C. Vicente Savall Pascual, 1, 03690 Sant Vicent del Raspeig, Alicante.</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Servicios</h2>
          <p className="text-gray-600 mb-6">Ofrecemos servicios de fontaneria: reparacion de fugas, instalaciones, desatascos, calentadores/calderas y reformas. Los detalles se especifican en el presupuesto.</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Presupuestos</h2>
          <p className="text-gray-600 mb-6">Todos los presupuestos son gratuitos, sin compromiso y con validez de 30 dias.</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Garantia</h2>
          <p className="text-gray-600 mb-6">Garantia minima de 1 ano sobre mano de obra. Materiales con garantia del fabricante.</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Urgencias</h2>
          <p className="text-gray-600 mb-6">Servicio 24h disponible. Trabajos fuera del horario habitual pueden tener recargo comunicado previamente.</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contacto</h2>
          <ul className="list-none text-gray-600 space-y-1"><li>Email: info@fontaneriamartos.es</li><li>Telefono: +34 966 123 456</li></ul>
        </div>
      </section>
    </>
  );
}
