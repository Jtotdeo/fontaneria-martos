"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Globe, Camera } from "lucide-react";
import { useDictionary } from "@/components/DictionaryProvider";

const serviceLinks = [
  { key: "reparacion-de-fugas", href: "/servicios/reparacion-de-fugas" },
  { key: "instalacion-de-fontaneria", href: "/servicios/instalacion-de-fontaneria" },
  { key: "desatascos", href: "/servicios/desatascos" },
  { key: "calentadores-y-calderas", href: "/servicios/calentadores-y-calderas" },
  { key: "reformas-de-banos", href: "/servicios/reformas-de-banos" },
];

export default function Footer() {
  const { dict, locale } = useDictionary();
  const prefix = `/${locale}`;

  const quickLinks = [
    { label: dict.nav.home, href: prefix },
    { label: dict.nav.about, href: `${prefix}/sobre-nosotros` },
    { label: dict.nav.projects, href: `${prefix}/proyectos` },
    { label: dict.nav.reviews, href: `${prefix}/reviews` },
    { label: dict.nav.faq, href: `${prefix}/faq` },
    { label: dict.nav.contact, href: `${prefix}/contacto` },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Fontanería Martos</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">{dict.footer.description}</p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors" aria-label="Facebook">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors" aria-label="Instagram">
                <Camera className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">{dict.footer.quickLinks}</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">{dict.footer.services}</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.key}>
                  <Link href={`${prefix}${link.href}`} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {dict.services.items[link.key]?.title || link.key}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">{dict.footer.contact}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">C. Vicente Savall Pascual, 1<br />03690 Sant Vicent del Raspeig, Alicante</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="tel:+34966123456" className="text-gray-400 hover:text-white transition-colors text-sm">+34 966 123 456</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:info@fontaneriamartos.es" className="text-gray-400 hover:text-white transition-colors text-sm">info@fontaneriamartos.es</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  {dict.contact.weekdays}<br />
                  {dict.contact.saturday}<br />
                  <span className="text-primary-400">{dict.contact.emergencyHours}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">{dict.footer.copyright}</p>
          <div className="flex gap-6">
            <Link href={`${prefix}/privacy`} className="text-gray-500 hover:text-white transition-colors text-sm">{dict.footer.privacy}</Link>
            <Link href={`${prefix}/voorwaarden`} className="text-gray-500 hover:text-white transition-colors text-sm">{dict.footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
