import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Globe, Camera } from "lucide-react";

const quickLinks = [
  { label: "Inicio", href: "/" },
  { label: "Sobre Nosotros", href: "/sobre-nosotros" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Reseñas", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Contacto", href: "/contacto" },
];

const serviceLinks = [
  { label: "Reparación de Fugas", href: "/servicios/reparacion-de-fugas" },
  { label: "Instalaciones", href: "/servicios/instalacion-de-fontaneria" },
  { label: "Desatascos", href: "/servicios/desatascos" },
  { label: "Calentadores y Calderas", href: "/servicios/calentadores-y-calderas" },
  { label: "Reformas de Baños", href: "/servicios/reformas-de-banos" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4">Fontanería Martos</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Más de 20 años ofreciendo servicios de fontanería profesional en
              Sant Vicent del Raspeig y toda la provincia de Alicante. Su
              fontanero de confianza.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Camera className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Enlaces */}
          <div>
            <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Servicios */}
          <div>
            <h4 className="font-bold mb-4">Servicios</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contacto */}
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  C. Vicente Savall Pascual, 1<br />
                  03690 Sant Vicent del Raspeig, Alicante
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href="tel:+34966123456"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  +34 966 123 456
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href="mailto:info@fontaneriamartos.es"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  info@fontaneriamartos.es
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Lun-Vie: 08:00-19:00
                  <br />
                  Sáb: 09:00-14:00
                  <br />
                  <span className="text-primary-400">Urgencias: 24h</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2025 Fontanería Martos. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/voorwaarden"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
