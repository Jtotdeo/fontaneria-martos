"use client";

import { useDictionary } from "@/components/DictionaryProvider";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export default function PrivacyPage() {
  const { dict, locale } = useDictionary();

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: dict.common.home, href: `/${locale}` }, { label: dict.footer.privacy }]} />
          <h1 className="text-4xl md:text-5xl font-bold mt-4">{dict.footer.privacy}</h1>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <p className="text-gray-500 text-sm mb-8">Ultima actualizacion: enero 2025</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Responsable del Tratamiento</h2>
          <p className="text-gray-600 mb-6">El responsable del tratamiento de sus datos personales es Fontaneria Martos, con domicilio en C. Vicente Savall Pascual, 1, 03690 Sant Vicent del Raspeig, Alicante. Puede contactarnos en info@fontaneriamartos.es o en el telefono +34 966 123 456.</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Datos que Recopilamos</h2>
          <p className="text-gray-600 mb-6">Recopilamos datos personales cuando utiliza nuestro formulario de contacto: nombre, email, telefono, direccion y descripcion del servicio solicitado.</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Finalidad</h2>
          <p className="text-gray-600 mb-6">Sus datos seran tratados para gestionar consultas, prestar servicios contratados, enviar comunicaciones relacionadas y cumplir obligaciones legales.</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Sus Derechos (RGPD)</h2>
          <p className="text-gray-600 mb-6">Tiene derecho a acceder, rectificar, suprimir, oponerse, limitar y portar sus datos. Contacte: info@fontaneriamartos.es</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Contacto</h2>
          <ul className="list-none text-gray-600 space-y-1"><li>Email: info@fontaneriamartos.es</li><li>Telefono: +34 966 123 456</li><li>C. Vicente Savall Pascual, 1, 03690 Sant Vicent del Raspeig, Alicante</li></ul>
        </div>
      </section>
    </>
  );
}
