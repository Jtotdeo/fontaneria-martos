import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de Fontanería Martos. Información sobre el tratamiento de datos personales conforme al RGPD.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Inicio", href: "/" },
              { label: "Política de Privacidad" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Política de Privacidad
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <p className="text-gray-500 text-sm mb-8">
            Última actualización: enero 2025
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            1. Responsable del Tratamiento
          </h2>
          <p className="text-gray-600 mb-6">
            El responsable del tratamiento de sus datos personales es Fontanería
            Martos, con domicilio en C. Vicente Savall Pascual, 1, 03690 Sant
            Vicent del Raspeig, Alicante. Puede contactarnos en
            info@fontaneriamartos.es o en el teléfono +34 966 123 456.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            2. Datos que Recopilamos
          </h2>
          <p className="text-gray-600 mb-4">
            Recopilamos los siguientes datos personales cuando usted utiliza
            nuestro formulario de contacto o solicita un presupuesto:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Nombre completo</li>
            <li>Dirección de correo electrónico</li>
            <li>Número de teléfono (opcional)</li>
            <li>Dirección (cuando sea necesario para la prestación del servicio)</li>
            <li>Descripción del servicio solicitado</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            3. Finalidad del Tratamiento
          </h2>
          <p className="text-gray-600 mb-4">
            Sus datos personales serán tratados con las siguientes finalidades:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Gestionar y responder a sus consultas y solicitudes de presupuesto</li>
            <li>Prestar los servicios de fontanería contratados</li>
            <li>Enviar comunicaciones relacionadas con el servicio</li>
            <li>Cumplir con las obligaciones legales aplicables</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            4. Base Legal
          </h2>
          <p className="text-gray-600 mb-6">
            La base legal para el tratamiento de sus datos es su consentimiento
            explícito al enviarnos un formulario de contacto, así como la
            ejecución del contrato de prestación de servicios cuando corresponda.
            Para el envío de comunicaciones comerciales, la base legal es su
            consentimiento previo.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            5. Conservación de Datos
          </h2>
          <p className="text-gray-600 mb-6">
            Sus datos personales se conservarán mientras sea necesario para la
            finalidad para la que fueron recogidos y durante el tiempo necesario
            para cumplir con las obligaciones legales. Los datos de clientes se
            conservarán durante un máximo de 5 años tras la última prestación de
            servicios.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            6. Sus Derechos
          </h2>
          <p className="text-gray-600 mb-4">
            De acuerdo con el Reglamento General de Protección de Datos (RGPD),
            usted tiene derecho a:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Acceder a sus datos personales</li>
            <li>Rectificar datos inexactos o incompletos</li>
            <li>Solicitar la supresión de sus datos</li>
            <li>Oponerse al tratamiento de sus datos</li>
            <li>Solicitar la limitación del tratamiento</li>
            <li>Solicitar la portabilidad de sus datos</li>
          </ul>
          <p className="text-gray-600 mb-6">
            Para ejercer estos derechos, puede enviar un correo electrónico a
            info@fontaneriamartos.es indicando su solicitud y acompañando una
            copia de su documento de identidad.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            7. Política de Cookies
          </h2>
          <p className="text-gray-600 mb-6">
            Este sitio web utiliza cookies técnicas necesarias para su correcto
            funcionamiento. No utilizamos cookies de seguimiento ni publicitarias.
            Las cookies técnicas no requieren consentimiento según la normativa
            vigente, ya que son estrictamente necesarias para proporcionar el
            servicio solicitado.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            8. Seguridad
          </h2>
          <p className="text-gray-600 mb-6">
            Hemos implementado medidas de seguridad técnicas y organizativas
            adecuadas para proteger sus datos personales contra el acceso no
            autorizado, la alteración, la divulgación o la destrucción.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            9. Contacto
          </h2>
          <p className="text-gray-600 mb-6">
            Si tiene alguna pregunta sobre esta política de privacidad o sobre
            el tratamiento de sus datos personales, no dude en contactarnos:
          </p>
          <ul className="list-none text-gray-600 mb-6 space-y-1">
            <li>Email: info@fontaneriamartos.es</li>
            <li>Teléfono: +34 966 123 456</li>
            <li>
              Dirección: C. Vicente Savall Pascual, 1, 03690 Sant Vicent del
              Raspeig, Alicante
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
