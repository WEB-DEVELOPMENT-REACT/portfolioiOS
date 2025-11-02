"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { packs } from "@/data";
import MagicButton from "./MagicButton";
import { FaArrowRight, FaPlay } from "react-icons/fa6";

interface PackDetailProps {
  slug: string;
  details: any;
}

const getIconComponent = (iconName: string) => {
  const icons: { [key: string]: JSX.Element } = {
    speed: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    money: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    target: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    web: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    cms: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    automation: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    funnel: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
      </svg>
    ),
    integration: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    analytics: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    rocket: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    code: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    iteration: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  };

  return icons[iconName] || icons.target;
};

const PackDetail = ({ slug, details }: PackDetailProps) => {
  const pack = packs.find((p) => p.slug === slug);

  if (!pack) return null;

  const stats = [
    {
      label: "Inversión estimada",
      value: pack.price,
    },
    {
      label: "Tiempo de entrega",
      value: pack.deliveryTime,
    },
    {
      label: pack.extras.length ? "Extras disponibles" : "Entregables clave",
      value: pack.extras.length
        ? `${pack.extras.length} ${pack.extras.length === 1 ? "extra" : "extras"}`
        : `${pack.features.length} entregables`,
    },
  ];

  const highlightFeatures = pack.features.slice(0, 3);
  const videoSrc = pack.previewVideo ?? "/firstsoft.mp4";

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="pb-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/[0.15] bg-white/[0.02] px-5 py-2 text-sm text-white">
              <span className="font-semibold text-purple">{pack.order}</span>
              <span className="text-white-200">{details.hero.subtitle}</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {details.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-white-200 leading-relaxed max-w-2xl">
                {details.hero.description}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent px-4 py-5"
                >
                  <p className="text-sm text-white/70 uppercase tracking-[0.2em]">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/contact">
                <MagicButton
                  title="Reservar consultoría"
                  icon={<FaArrowRight />}
                  position="right"
                />
              </Link>
              <Link href="/packs">
                <button className="inline-flex items-center justify-center rounded-lg border border-white/[0.15] px-6 py-3 text-white transition hover:border-purple/60 hover:text-purple">
                  Ver otros packs
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-black-200 shadow-[0_0_40px_rgba(133,76,230,0.15)]"
          >
            <div className="relative aspect-[4/3] w-full">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 text-xs font-semibold text-white">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple/80 text-[10px] uppercase tracking-wider">
                  HD
                </span>
                Vista previa del proyecto
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/[0.35] bg-black/30 text-white">
                  <FaPlay className="ml-1" />
                </span>
              </div>
            </div>

            <div className="relative z-10 space-y-4 border-t border-white/[0.05] bg-black/60 px-8 py-8 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                ¿Qué verás en este pack?
              </p>
              <ul className="space-y-3">
                {highlightFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-white-200">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-purple/30 text-purple">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
          <div className="h-full w-3/4 max-w-5xl rounded-[40px] bg-purple/20 opacity-20 blur-[120px]">
            &nbsp;
          </div>
        </div>

        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white">Ventajas principales</h2>
          <p className="mt-4 text-white-200">
            El pack está diseñado para que avances rápido sin sacrificar calidad. Estos son los pilares que aseguran resultados.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {details.benefits.map((benefit: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.12 }}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.04] p-8 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2 hover:border-purple/60"
            >
              <div className="absolute -right-32 -top-32 h-56 w-56 rounded-full bg-purple/30 blur-[90px] opacity-0 transition-opacity duration-300 group-hover:opacity-80" />
              <div className="relative mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-purple/20 text-purple">
                {getIconComponent(benefit.icon)}
              </div>
              <h3 className="relative text-xl font-semibold text-white">{benefit.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-white-200">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="pb-24">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white">Proceso de trabajo</h2>
          <p className="mt-4 text-white-200">
            Te acompañamos en cada fase con entregables claros y sesiones de revisión programadas para que siempre sepas qué sigue.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="pointer-events-none absolute left-9 top-0 hidden h-full w-[2px] bg-gradient-to-b from-purple/60 via-purple/20 to-transparent md:block" />
          <div className="space-y-8">
            {details.process.map((step: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.12 }}
                className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.04] p-6 backdrop-blur-sm md:p-8"
              >
                {idx < details.process.length - 1 && (
                  <span className="pointer-events-none absolute left-[1.85rem] top-[calc(100%-0.5rem)] hidden h-8 w-px bg-gradient-to-b from-purple/30 to-transparent md:block" />
                )}
                <div className="flex flex-col gap-6 md:flex-row md:gap-8">
                  <div className="flex items-center md:min-w-[120px]">
                    <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-purple/20 text-2xl font-bold text-purple">
                      {step.step}
                      <span className="absolute inset-0 -z-10 rounded-2xl border border-purple/40" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-col gap-2 text-left md:flex-row md:items-center md:justify-between">
                      <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                      <span className="inline-flex items-center rounded-full border border-purple/40 bg-purple/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-purple">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-white-200">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="pb-24">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white">Casos de éxito</h2>
          <p className="mt-4 text-white-200">
            Proyectos reales donde aplicamos el mismo enfoque. Cada entrega incluye métricas claras y mejoras mensurables.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {details.examples.map((example: any, idx: number) => {
            const metrics = Object.entries(example.metrics ?? {});

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2 hover:border-purple/60"
              >
                <div className="relative h-48 overflow-hidden">
                  {example.image ? (
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${example.image})` }}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-purple/30 via-purple/10 to-transparent" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-white">
                    Caso real
                  </span>
                </div>

                <div className="space-y-4 px-6 py-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{example.title}</h3>
                    <p className="mt-2 text-sm text-white-200">{example.description}</p>
                  </div>

                  {metrics.length > 0 && (
                    <div className="grid gap-3 rounded-2xl border border-white/[0.05] bg-black/40 p-4">
                      {metrics.map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between text-sm text-white-200">
                          <span className="capitalize opacity-80">{key.replace(/_/g, " ")}</span>
                          <span className="font-semibold text-white">{value as string}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* What's Included Section */}
      <section className="pb-24">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white">¿Qué incluye?</h2>
          <p className="mt-4 text-white-200">
            Todo lo necesario para lanzar con confianza. Puedes añadir extras si buscas un despliegue aún más completo.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-white/[0.08] bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent px-8 py-10">
          <div className="absolute -left-24 top-0 h-56 w-56 rounded-full bg-purple/30 blur-[100px]" />
          <div className="absolute -right-16 bottom-0 h-40 w-40 rounded-full bg-pink-500/20 blur-[90px]" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_minmax(0,0.9fr)]">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white">Incluido en el pack</h3>
                <p className="mt-2 text-sm text-white-200">Entregables base listos para publicar y captar resultados desde el día uno.</p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {pack.features.map((feature, idx) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-black/40 px-4 py-3 text-sm text-white-200"
                  >
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple/25 text-sm font-semibold text-purple">
                      {idx + 1}
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative space-y-6 rounded-3xl border border-purple/30 bg-purple/10 p-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">Extras opcionales</h3>
                <p className="text-sm text-white-200">
                  Personaliza el alcance según tu estrategia. Los extras se cotizan como add-ons.
                </p>
              </div>

              {pack.extras.length > 0 ? (
                <ul className="space-y-3">
                  {pack.extras.map((extra) => (
                    <li key={extra} className="flex items-start gap-3 text-sm text-white">
                      <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-purple">
                        +
                      </span>
                      <span className="text-white-200">{extra}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="rounded-2xl border border-white/[0.08] bg-black/40 p-4 text-sm text-white-200">
                  Este pack está cerrado. Podemos conversar si necesitas algo a medida.
                </div>
              )}

              <p className="text-xs uppercase tracking-[0.25em] text-purple/80">
                {pack.extras.length > 0 ? "Solicita tu combinación ideal" : "Plan listo para lanzar"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-24">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white">Preguntas frecuentes</h2>
          <p className="mt-4 text-white-200">
            Resolviendo dudas habituales antes de comenzar. Si necesitas algo más específico, agendemos una llamada.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
          {details.faq.map((item: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm"
            >
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-purple/20 blur-[80px] opacity-0 transition-opacity duration-300 group-hover:opacity-80" />
              <div className="relative flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple/15 text-sm font-bold text-purple">
                  ?
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                  <p className="text-sm leading-relaxed text-white-200">{item.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="pb-24">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white">Testimonios de clientes</h2>
          <p className="mt-4 text-white-200">
            Historias de equipos que confiaron en nosotros para lanzar, automatizar y escalar sus productos digitales.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {details.testimonials.map((testimonial: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-sm"
            >
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-purple/25 blur-[80px] opacity-0 transition-opacity duration-300 group-hover:opacity-80" />
              <div className="relative flex flex-col gap-5">
                <div className="flex items-center gap-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="h-4 w-4 rounded-full bg-gradient-to-br from-purple to-pink-500" />
                  ))}
                </div>
                <p className="relative text-base leading-relaxed text-white-200">
                  “{testimonial.text}”
                </p>
                <div className="relative flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple/20 text-lg font-semibold text-purple">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple/80">
                      {testimonial.role}
                    </p>
                    <p className="text-white text-lg font-semibold">{testimonial.name}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[32px] border border-purple/40 bg-gradient-to-br from-purple/25 via-purple/15 to-pink-500/20 px-8 py-12 md:px-12"
        >
          <div className="absolute -left-32 top-0 h-64 w-64 rounded-full bg-white/20 blur-[120px] opacity-30" />
          <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_60%)]" />

          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/90">
                Agenda tu siguiente paso
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                {details.cta.title}
              </h2>
              <p className="text-base md:text-lg text-white-100 leading-relaxed">
                {details.cta.description}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact">
                  <MagicButton
                    title={details.cta.buttonText}
                    icon={<FaArrowRight />}
                    position="right"
                  />
                </Link>
                <Link href="/packs">
                  <button className="inline-flex items-center justify-center rounded-lg border border-white/40 px-6 py-3 text-white transition hover:border-white hover:bg-white/10">
                    Ver otros packs
                  </button>
                </Link>
              </div>
            </div>

            <div className="space-y-4 rounded-3xl border border-white/25 bg-black/30 p-6 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                Lo que prepararemos juntos
              </p>
              <ul className="space-y-3 text-sm text-white-200">
                {highlightFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-purple">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="grid gap-3 rounded-2xl border border-white/[0.08] bg-black/50 p-4">
                {stats.slice(0, 2).map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between text-xs text-white/80">
                    <span className="uppercase tracking-[0.25em]">{stat.label}</span>
                    <span className="text-sm font-semibold text-white">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default PackDetail;
