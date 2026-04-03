"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useDictionary } from "@/components/DictionaryProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const serviceKeys = [
  "reparacion-de-fugas",
  "instalacion-de-fontaneria",
  "desatascos",
  "calentadores-y-calderas",
  "reformas-de-banos",
] as const;

export default function Header() {
  const { dict, locale } = useDictionary();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  const prefix = `/${locale}`;

  const navLinks = [
    { label: dict.nav.home, href: prefix },
    { label: dict.nav.about, href: `${prefix}/sobre-nosotros` },
    {
      label: dict.nav.services,
      href: `${prefix}/servicios`,
      children: serviceKeys.map((key) => ({
        label: dict.services.items[key]?.title || key,
        href: `${prefix}/servicios/${key}`,
      })),
    },
    { label: dict.nav.projects, href: `${prefix}/proyectos` },
    { label: dict.nav.reviews, href: `${prefix}/reviews` },
    { label: dict.nav.faq, href: `${prefix}/faq` },
    { label: dict.nav.contact, href: `${prefix}/contacto` },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const isHome = pathname === prefix || pathname === `${prefix}/`;
  const headerBg = scrolled || !isHome ? "bg-white shadow-md" : "bg-transparent";
  const textColor = scrolled || !isHome ? "text-gray-900" : "text-white";
  const linkHover = scrolled || !isHome ? "hover:text-primary-600" : "hover:text-primary-200";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      {/* Top bar */}
      <div className={`hidden md:block border-b transition-colors ${scrolled || !isHome ? "border-gray-100" : "border-white/10"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-2">
          <LanguageSwitcher />
          <a
            href="tel:+34966123456"
            className={`flex items-center gap-2 text-sm font-medium ${textColor} ${linkHover} transition-colors`}
          >
            <Phone className="w-4 h-4" />
            +34 966 123 456
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href={prefix} className={`text-xl font-bold ${textColor} transition-colors`}>
            Fontanería Martos
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setDropdownOpen(true)}
                onMouseLeave={() => link.children && setDropdownOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                    pathname === link.href ? "text-primary-500" : `${textColor} ${linkHover}`
                  }`}
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-4 h-4" />}
                </Link>
                {link.children && dropdownOpen && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 w-64">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href={`${prefix}/contacto`}
              className="bg-primary-500 hover:bg-primary-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
            >
              {dict.nav.requestQuote}
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <button onClick={() => setMobileOpen(!mobileOpen)} className={`p-2 ${textColor}`}>
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 top-0 bg-white z-40 lg:hidden overflow-y-auto"
          >
            <div className="px-6 pt-6 pb-4 flex items-center justify-between">
              <Link href={prefix} className="text-xl font-bold text-gray-900">
                Fontanería Martos
              </Link>
              <button onClick={() => setMobileOpen(false)} className="p-2">
                <X className="w-6 h-6 text-gray-900" />
              </button>
            </div>
            <nav className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className={`block py-3 text-lg font-medium ${
                      pathname === link.href ? "text-primary-600" : "text-gray-900"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4 space-y-1">
                      {link.children.map((child) => (
                        <Link key={child.href} href={child.href} className="block py-2 text-gray-600 hover:text-primary-600">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-6">
                <Link
                  href={`${prefix}/contacto`}
                  className="block w-full bg-primary-500 text-white text-center py-3 rounded-xl font-semibold"
                >
                  {dict.nav.requestQuote}
                </Link>
                <a
                  href="tel:+34966123456"
                  className="block w-full border-2 border-primary-500 text-primary-600 text-center py-3 rounded-xl font-semibold mt-3"
                >
                  {dict.nav.callUs}: +34 966 123 456
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
