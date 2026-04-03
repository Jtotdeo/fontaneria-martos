"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDictionary } from "@/components/DictionaryProvider";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import AnimatedSection from "@/components/ui/AnimatedSection";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  privacy: boolean;
}

export default function ContactoPage() {
  const { dict, locale } = useDictionary();
  const t = dict.contact;
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>();

  const onSubmit = () => {
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: dict.common.home, href: `/${locale}` },
              { label: t.pageTitle },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            {t.pageTitle}
          </h1>
          <p className="text-primary-100 text-lg max-w-2xl">
            {t.pageSubtitle}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Formulario */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {t.formTitle}
                </h2>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {t.successTitle}
                    </h3>
                    <p className="text-gray-600">{t.successText}</p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t.name} *
                        </label>
                        <input
                          {...register("name", {
                            required: t.errors.nameRequired,
                          })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                          placeholder={t.namePlaceholder}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t.email} *
                        </label>
                        <input
                          type="email"
                          {...register("email", {
                            required: t.errors.emailRequired,
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: t.errors.emailInvalid,
                            },
                          })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                          placeholder={t.emailPlaceholder}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t.phone}
                        </label>
                        <input
                          type="tel"
                          {...register("phone")}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                          placeholder={t.phonePlaceholder}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t.subject} *
                        </label>
                        <select
                          {...register("subject", {
                            required: t.errors.subjectRequired,
                          })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                        >
                          <option value="">{t.selectSubject}</option>
                          <option value="presupuesto">
                            {t.subjects.quote}
                          </option>
                          <option value="urgencia">
                            {t.subjects.emergency}
                          </option>
                          <option value="reparacion">
                            {t.subjects.repair}
                          </option>
                          <option value="instalacion">
                            {t.subjects.installation}
                          </option>
                          <option value="reforma">
                            {t.subjects.renovation}
                          </option>
                          <option value="otro">{t.subjects.other}</option>
                        </select>
                        {errors.subject && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.subject.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.message} *
                      </label>
                      <textarea
                        {...register("message", {
                          required: t.errors.messageRequired,
                          minLength: {
                            value: 10,
                            message: t.errors.messageMin,
                          },
                        })}
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none"
                        placeholder={t.messagePlaceholder}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          {...register("privacy", {
                            required: t.errors.privacyRequired,
                          })}
                          className="mt-1"
                        />
                        <span className="text-sm text-gray-600">
                          {t.privacy}{" "}
                          <a
                            href={`/${locale}/privacy`}
                            className="text-primary-600 underline"
                          >
                            {t.privacyLink}
                          </a>{" "}
                          *
                        </span>
                      </label>
                      {errors.privacy && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.privacy.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full md:w-auto bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      {t.send}
                    </button>
                  </form>
                )}
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div>
              <AnimatedSection delay={0.2}>
                <div className="bg-gray-50 rounded-2xl p-8 space-y-8">
                  <h3 className="text-xl font-bold text-gray-900">
                    {t.contactDetails}
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {t.address}
                        </p>
                        <p className="text-gray-600 text-sm">
                          C. Vicente Savall Pascual, 1<br />
                          03690 Sant Vicent del Raspeig
                          <br />
                          Alicante
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {t.phone}
                        </p>
                        <a
                          href="tel:+34966123456"
                          className="text-primary-600 hover:underline"
                        >
                          +34 966 123 456
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {t.email}
                        </p>
                        <a
                          href="mailto:info@fontaneriamartos.es"
                          className="text-primary-600 hover:underline"
                        >
                          info@fontaneriamartos.es
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {t.hours}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {t.weekdays}
                          <br />
                          {t.saturday}
                          <br />
                          <span className="text-primary-600 font-medium">
                            {t.emergencyHours}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/34966123456"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {t.whatsapp}
                  </a>
                </div>
              </AnimatedSection>

              {/* Google Maps */}
              <AnimatedSection delay={0.3}>
                <div className="mt-8 bg-gray-200 rounded-2xl h-64 flex items-center justify-center overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3128.5!2d-0.5218494!3d38.3923285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6236a92b072aeb%3A0xf5a1df03892e9837!2sFontaner%C3%ADa%20Martos!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de Fontanería Martos"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
