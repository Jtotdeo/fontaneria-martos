import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Términos y condiciones generales de Fontanería Martos para la prestación de servicios de fontanería.",
};

export default function VoorwaardenPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Inicio", href: "/" },
              { label: "Términos y Condiciones" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Términos y Condiciones
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <p className="text-gray-500 text-sm mb-8">
            Última actualización: enero 2025
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            1. Identificación
          </h2>
          <p className="text-gray-600 mb-6">
            Fontanería Martos, con domicilio social en C. Vicente Savall
            Pascual, 1, 03690 Sant Vicent del Raspeig, Alicante, es la empresa
            responsable de la prestación de los servicios descritos en este sitio
            web. A continuación se detallan los términos y condiciones que rigen
            la relación entre Fontanería Martos y sus clientes.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            2. Servicios
          </h2>
          <p className="text-gray-600 mb-6">
            Fontanería Martos ofrece servicios de fontanería que incluyen, entre
            otros: reparación de fugas, instalaciones de fontanería, desatascos y
            limpieza de tuberías, mantenimiento de calentadores y calderas, y
            reformas de baños y cocinas. Los servicios específicos, alcance y
            precio se detallarán en el presupuesto que se proporcionará al
            cliente antes de iniciar cualquier trabajo.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            3. Presupuestos
          </h2>
          <p className="text-gray-600 mb-6">
            Todos los presupuestos son gratuitos y sin compromiso. El presupuesto
            tendrá una validez de 30 días naturales desde su emisión, salvo que
            se indique lo contrario. El presupuesto incluirá una descripción
            detallada del trabajo a realizar, los materiales necesarios, el coste
            de la mano de obra y el IVA aplicable. Cualquier trabajo adicional no
            contemplado en el presupuesto original requerirá la aprobación previa
            del cliente.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            4. Precios y Pagos
          </h2>
          <p className="text-gray-600 mb-6">
            Los precios indicados en los presupuestos incluyen IVA, salvo
            indicación contraria. El pago se realizará según las condiciones
            acordadas en el presupuesto aceptado. Para trabajos de gran
            envergadura, podrá solicitarse un anticipo del 30% del importe total.
            Se aceptan pagos mediante transferencia bancaria, tarjeta de crédito
            y efectivo.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            5. Garantía
          </h2>
          <p className="text-gray-600 mb-6">
            Todos los trabajos realizados por Fontanería Martos tienen una
            garantía mínima de 1 año sobre la mano de obra. Los materiales
            instalados están cubiertos por la garantía del fabricante. La
            garantía no cubre daños causados por un uso inadecuado, falta de
            mantenimiento o intervención de terceros no autorizados. Para hacer
            efectiva la garantía, el cliente deberá conservar la factura o
            comprobante de pago.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            6. Servicio de Urgencias
          </h2>
          <p className="text-gray-600 mb-6">
            Fontanería Martos dispone de un servicio de urgencias disponible las
            24 horas del día, los 7 días de la semana. Los trabajos realizados
            fuera del horario habitual (lunes a viernes de 08:00 a 19:00 y
            sábados de 09:00 a 14:00) podrán tener un recargo adicional que será
            comunicado al cliente antes de iniciar el trabajo.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            7. Responsabilidad
          </h2>
          <p className="text-gray-600 mb-6">
            Fontanería Martos cuenta con un seguro de responsabilidad civil que
            cubre posibles daños derivados de la prestación de sus servicios. En
            caso de daños, el cliente deberá notificarlo por escrito en un plazo
            de 48 horas. La empresa no se responsabiliza de daños preexistentes
            ni de aquellos derivados del deterioro natural de las instalaciones.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            8. Cancelaciones
          </h2>
          <p className="text-gray-600 mb-6">
            El cliente podrá cancelar un servicio programado sin coste alguno con
            un mínimo de 24 horas de antelación. Las cancelaciones realizadas con
            menos de 24 horas de antelación podrán estar sujetas a un cargo por
            desplazamiento. En caso de que Fontanería Martos deba cancelar o
            reprogramar un servicio, se notificará al cliente con la mayor
            antelación posible.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            9. Protección de Datos
          </h2>
          <p className="text-gray-600 mb-6">
            El tratamiento de datos personales se realiza conforme a lo
            establecido en nuestra{" "}
            <a href="/privacy" className="text-primary-600 underline">
              Política de Privacidad
            </a>
            , que forma parte integrante de estos términos y condiciones.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            10. Legislación Aplicable
          </h2>
          <p className="text-gray-600 mb-6">
            Estos términos y condiciones se rigen por la legislación española.
            Para la resolución de cualquier controversia derivada de la
            interpretación o aplicación de estos términos, las partes se someten
            a los juzgados y tribunales de Alicante, con renuncia expresa a
            cualquier otro fuero que pudiera corresponderles.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            11. Contacto
          </h2>
          <p className="text-gray-600 mb-6">
            Para cualquier consulta sobre estos términos y condiciones, puede
            contactar con nosotros en:
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
