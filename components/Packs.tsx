'use client';

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import { packs } from "@/data";
import {
  DEFAULT_PACK_VIDEO,
  type PackVideoAssignments,
  generatePackVideoAssignments,
  loadAssignmentsFromStorage,
  saveAssignmentsToStorage,
} from "@/lib/packVideos";

type TechItem = {
  name: string;
  iconClass: string;
};

const technologies: TechItem[] = [
  { name: "Swift", iconClass: "devicon-swift-plain colored" },
  { name: "Apple", iconClass: "devicon-apple-original" },
  { name: "SwiftUI", iconClass: "devicon-swift-plain" },
  { name: "React", iconClass: "devicon-react-original colored" },
  { name: "Next.js", iconClass: "devicon-nextjs-original" },
  { name: "TypeScript", iconClass: "devicon-typescript-plain colored" },
  { name: "TailwindCSS", iconClass: "devicon-tailwindcss-plain colored" },
  { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
  { name: "Express", iconClass: "devicon-express-original" },
  { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored" },
  { name: "MongoDB", iconClass: "devicon-mongodb-plain colored" },
  { name: "Firebase", iconClass: "devicon-firebase-plain colored" },
  { name: "Supabase", iconClass: "devicon-supabase-original" },
  { name: "AWS", iconClass: "devicon-amazonwebservices-plain colored" },
  { name: "Vercel", iconClass: "devicon-vercel-original" },
  { name: "Docker", iconClass: "devicon-docker-plain colored" },
  { name: "GitHub", iconClass: "devicon-github-original" },
  { name: "Figma", iconClass: "devicon-figma-plain colored" },
  { name: "Zapier", iconClass: "devicon-zapier-plain colored" },
  { name: "Jira", iconClass: "devicon-jira-plain colored" },
];

const Packs = () => {
  const displayPacks = React.useMemo(
    () => packs.filter((pack) => pack.slug !== "mantenimiento-pro"),
    []
  );
  const packSlugs = React.useMemo(
    () => displayPacks.map((pack) => pack.slug),
    [displayPacks]
  );
  const [videoAssignments, setVideoAssignments] =
    React.useState<PackVideoAssignments>({});

  React.useEffect(() => {
    if (packSlugs.length === 0) {
      return;
    }

    const storedAssignments = loadAssignmentsFromStorage();

    if (
      storedAssignments &&
      packSlugs.every((slug) => storedAssignments[slug])
    ) {
      setVideoAssignments(storedAssignments);
      return;
    }

    const usedVideos = storedAssignments
      ? Object.values(storedAssignments)
      : [];
    const missingSlugs = packSlugs.filter(
      (slug) => !(storedAssignments && storedAssignments[slug])
    );
    const newAssignments = generatePackVideoAssignments(
      missingSlugs,
      usedVideos
    );

    const mergedAssignments: PackVideoAssignments = {
      ...(storedAssignments ?? {}),
      ...newAssignments,
    };

    setVideoAssignments(mergedAssignments);
    saveAssignmentsToStorage(mergedAssignments);
  }, [packSlugs]);

  const marqueeItems = React.useMemo(() => [...technologies, ...technologies], []);
  const marqueeStyle = React.useMemo(
    () =>
      ({
        "--animation-duration": "40s",
        "--animation-direction": "normal",
      }) as React.CSSProperties,
    []
  );

  return (
    <section className="w-full py-20">
      <div className="relative mx-auto mb-16 max-w-6xl overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-black-100 via-black-100/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-black-100 via-black-100/80 to-transparent" />
        <div
          className="flex w-max items-center gap-10 animate-scroll"
          style={marqueeStyle}
          aria-label="Tecnologías y herramientas"
        >
          {marqueeItems.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-4 rounded-3xl border border-white/[0.1] bg-white/[0.05] px-8 py-4 backdrop-blur transition-transform duration-300 hover:-translate-y-2"
            >
              <i className={`${tech.iconClass} text-4xl`} aria-hidden="true" />
              <span className="text-base font-semibold text-white whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <h1 className="heading">
        Servicios <span className="text-purple">Profesionales</span>
      </h1>
      <p className="text-center text-white-200 mt-4 mb-8 text-lg max-w-3xl mx-auto">
        Soluciones escalables para cada etapa de tu negocio
      </p>

      <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {displayPacks.map((pack) => (
          <PackCard
            key={pack.id}
            pack={pack}
            videoSrc={videoAssignments[pack.slug]}
          />
        ))}
      </div>

      {/* Pack Extra - Mantenimiento */}
      <div className="mt-16">
        <MaintenanceCard />
      </div>
    </section>
  );
};

export default Packs;

interface PackProps {
  pack: {
    id: number;
    order: string;
    title: string;
    subtitle: string;
    price: string;
    deliveryTime: string;
    features: string[];
    extras: string[];
    color: string;
    gradientFrom: string;
    gradientTo: string;
    slug: string;
    previewVideo?: string;
  };
  videoSrc?: string;
}

const PackCard = ({ pack, videoSrc }: PackProps) => {
  const [hovered, setHovered] = React.useState(false);

  const getColorClasses = (color: string) => {
    switch (color) {
      case "emerald":
        return { bg: "bg-emerald-900", colors: [[16, 185, 129]] };
      case "pink":
        return { bg: "bg-pink-900", colors: [[255, 166, 158], [221, 255, 247]] };
      case "sky":
        return { bg: "bg-sky-600", colors: [[125, 211, 252]] };
      case "purple":
        return { bg: "bg-purple-900", colors: [[168, 85, 247]] };
      case "orange":
        return { bg: "bg-orange-700", colors: [[249, 115, 22]] };
      case "teal":
        return { bg: "bg-teal-700", colors: [[20, 184, 166]] };
      case "amber":
        return { bg: "bg-amber-700", colors: [[245, 158, 11]] };
      default:
        return { bg: "bg-emerald-900", colors: [[16, 185, 129]] };
    }
  };

  const colorConfig = getColorClasses(pack.color);
  const resolvedVideoSrc =
    videoSrc ?? pack.previewVideo ?? DEFAULT_PACK_VIDEO;

  return (
    <Link href={`/packs/${pack.slug}`}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="border border-black/[0.2] group/canvas-card flex
         dark:border-white/[0.2] w-full mx-auto p-3 relative min-h-[520px] rounded-3xl cursor-pointer
         hover:border-purple/50 transition-all duration-300 overflow-hidden"
        style={{
          background: "rgb(4,7,29)",
          backgroundColor:
            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        }}
      >
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover"
            src={resolvedVideoSrc}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-black/40 transition-all duration-300 group-hover/canvas-card:bg-black/70" />
        </div>

        <Icon className="absolute h-8 w-8 -top-2 -left-2 dark:text-white text-black opacity-30 z-10" />
        <Icon className="absolute h-8 w-8 -bottom-2 -left-2 dark:text-white text-black opacity-30 z-10" />
        <Icon className="absolute h-8 w-8 -top-2 -right-2 dark:text-white text-black opacity-30 z-10" />
        <Icon className="absolute h-8 w-8 -bottom-2 -right-2 dark:text-white text-black opacity-30 z-10" />

        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full w-full absolute inset-0 z-10"
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName={`${colorConfig.bg} rounded-3xl overflow-hidden`}
                colors={colorConfig.colors}
                dotSize={2}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative z-20 w-full h-full overflow-hidden">
          <AnimatePresence mode="wait">
            {!hovered ? (
              <motion.div
                key="base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="flex h-full flex-col items-center justify-center gap-6 px-4 text-center"
              >
                <PackBadge
                  order={pack.order}
                  title={pack.title}
                  subtitle={pack.subtitle}
                />

                <div className="w-full max-w-sm">
                  <div className="grid grid-cols-2 gap-3 text-left">
                    <div className="rounded-2xl border border-white/[0.08] bg-black/50 px-4 py-3">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">Inversión</p>
                      <p className="mt-1 text-sm font-semibold text-white whitespace-nowrap">{pack.price}</p>
                    </div>
                    <div className="rounded-2xl border border-white/[0.08] bg-black/50 px-4 py-3">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">Entrega</p>
                      <p className="mt-1 text-sm font-semibold text-white whitespace-nowrap">{pack.deliveryTime}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="detail"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="flex h-full flex-col rounded-[24px] border border-white/[0.08] bg-black/55 px-4 py-5"
              >
                <div className="flex-1 overflow-y-auto pr-2 flex flex-col gap-4 text-left">
                  <div className="space-y-2">
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/70">
                      {pack.order}
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold text-white">{pack.title}</h2>
                    <p className="text-xs text-white-200 leading-snug">{pack.subtitle}</p>
                  </div>

                  <div className="text-[11px] text-white-200">
                    <p className="text-base sm:text-lg font-semibold text-purple">{pack.price}</p>
                    <p>
                      Entrega: <span className="font-semibold text-white">{pack.deliveryTime}</span>
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-white">Incluye:</h3>
                    <ul className="space-y-1.5">
                      {pack.features.slice(0, 5).map((feature, idx) => (
                        <li key={idx} className="text-xs text-white-200 flex items-start">
                          <span className="text-purple mr-1 text-sm">✓</span>
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                      {pack.features.length > 5 && (
                        <li className="text-xs text-purple font-semibold">
                          +{pack.features.length - 5} más...
                        </li>
                      )}
                    </ul>
                  </div>

                  {pack.extras.length > 0 && (
                    <div className="space-y-1.5">
                      <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/70">
                        Extras sugeridos
                      </h4>
                      <ul className="space-y-1">
                        {pack.extras.slice(0, 2).map((extra, idx) => (
                          <li key={idx} className="text-[11px] text-white-200 flex items-start">
                            <span className="text-purple mr-1 text-sm">+</span>
                            <span className="line-clamp-1">{extra}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-4 text-center">
                  <span className="text-purple text-sm font-semibold group-hover/canvas-card:underline">
                    Ver detalles completos →
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Link>
  );
};

const MaintenanceCard = () => {
  const [hovered, setHovered] = React.useState(false);
  const maintenancePack = React.useMemo(
    () => packs.find((item) => item.slug === "mantenimiento-pro"),
    []
  );

  if (!maintenancePack) return null;

  return (
    <Link href="/packs/mantenimiento-pro">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="border border-black/[0.2] group/canvas-card flex items-center justify-center
         dark:border-white/[0.2] max-w-4xl w-full mx-auto p-4 relative min-h-[420px] rounded-3xl cursor-pointer
         hover:border-purple/50 transition-all duration-300"
        style={{
          background: "rgb(4,7,29)",
          backgroundColor:
            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        }}
      >
        <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
        <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
        <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
        <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full w-full absolute inset-0"
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-amber-900 rounded-3xl overflow-hidden"
                colors={[[245, 158, 11]]}
                dotSize={2}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative z-20 w-full h-full overflow-hidden">
          <AnimatePresence mode="wait">
            {!hovered ? (
              <motion.div
                key="card-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="flex h-full flex-col items-center justify-center gap-6 px-8 text-center"
              >
                <PackBadge
                  order={maintenancePack.order}
                  title={maintenancePack.title}
                  subtitle={maintenancePack.subtitle}
                />
                <div className="w-full max-w-md">
                  <div className="grid grid-cols-2 gap-3 text-left">
                    <div className="rounded-2xl border border-white/[0.08] bg-black/50 px-4 py-3">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">Precio</p>
                      <p className="mt-1 text-sm font-semibold text-white whitespace-nowrap">{maintenancePack.price}</p>
                    </div>
                    <div className="rounded-2xl border border-white/[0.08] bg-black/50 px-4 py-3">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">Tipo</p>
                      <p className="mt-1 text-sm font-semibold text-white whitespace-nowrap">Retainer mensual</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="card-detail"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="flex h-full flex-col rounded-[28px] border border-white/[0.08] bg-black/60 px-8 py-6"
              >
                <div className="flex-1 overflow-y-auto pr-4 space-y-4 text-left">
                  <div className="space-y-2">
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/70">
                      {maintenancePack.order}
                    </span>
                    <h2 className="text-2xl font-bold text-white">{maintenancePack.title}</h2>
                    <p className="text-sm text-white-200">{maintenancePack.subtitle}</p>
                  </div>

                  <div className="text-sm text-white-200">
                    <p className="font-semibold text-purple">{maintenancePack.price}</p>
                    <p>Plan mensual con soporte prioritario.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-white">Incluye</h3>
                      <ul className="space-y-1.5">
                        {maintenancePack.features.slice(0, 4).map((feature) => (
                          <li key={feature} className="text-sm text-white-200 flex items-start">
                            <span className="text-purple mr-2">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <ul className="space-y-1.5">
                        {maintenancePack.features.slice(4).map((feature) => (
                          <li key={feature} className="text-sm text-white-200 flex items-start">
                            <span className="text-purple mr-2">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {maintenancePack.extras.length > 0 && (
                    <div className="space-y-1.5">
                      <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                        Extras disponibles
                      </h4>
                      <ul className="space-y-1">
                        {maintenancePack.extras.slice(0, 2).map((extra) => (
                          <li key={extra} className="text-sm text-white-200 flex items-start gap-2">
                            <span className="text-purple">+</span>
                            <span className="line-clamp-1">{extra}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-4 text-center">
                  <span className="text-purple text-sm font-semibold group-hover/canvas-card:underline">
                    Ver detalles completos →
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Link>
  );
};

interface PackBadgeProps {
  order: string;
  title: string;
  subtitle: string;
}

const PackBadge = ({ order, title, subtitle }: PackBadgeProps) => {
  return (
    <div className="w-full max-w-sm">
      <div className="relative inline-flex w-full overflow-hidden rounded-2xl p-[1px]">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <div
          className="inline-flex w-full flex-col gap-1 rounded-2xl bg-slate-950/80 px-6 py-5 text-left text-white backdrop-blur-3xl"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-purple">
            {order}
          </span>
          <span className="text-lg font-semibold text-white">
            {title}
          </span>
          <span className="text-xs text-white-200 line-clamp-2">
            {subtitle}
          </span>
        </div>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
