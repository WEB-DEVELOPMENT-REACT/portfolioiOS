"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";

const isStoreApp = (link: string) =>
  link.includes("apps.apple.com") || link.includes("appetize.io");

const resolveProjectHref = (link: string) =>
  link.startsWith("http") ? link : `/${link}`;

type ProjectItem = (typeof projects)[number];

const ProjectRow = ({ item }: { item: ProjectItem }) => {
  const href = resolveProjectHref(item.link);
  const openInNewTab = href.startsWith("http");

  return (
    <a
      href={href}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noreferrer" : undefined}
      className="group flex items-center gap-3 rounded-xl border border-white/[0.08] bg-black/30 px-3 py-2 transition-colors hover:border-purple/60"
    >
      <img
        src={item.img}
        alt={item.title}
        className="h-14 w-20 flex-shrink-0 rounded-md object-cover object-center"
      />

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="truncate text-sm font-semibold text-white md:text-base">{item.title}</h3>
          <span className="flex items-center gap-1 text-xs text-purple whitespace-nowrap">
            {isStoreApp(item.link) ? "App Store" : "Web"}
            <FaLocationArrow />
          </span>
        </div>

        <p className="mt-1 truncate text-xs text-white-200">{item.des}</p>

        <div className="mt-2 flex items-center gap-1">
          {item.iconLists.slice(0, 5).map((icon, index) => (
            <span
              key={`${item.id}-${index}`}
              className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/[0.15] bg-black"
            >
              <img src={icon} alt={`tech-${index}`} className="h-4 w-4 object-contain" />
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

const CategoryColumn = ({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: ProjectItem[];
}) => {
  return (
    <section className="rounded-2xl border border-white/[0.1] bg-white/[0.02] p-4 md:p-5">
      <div className="mb-4 flex items-end justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-white md:text-2xl">{title}</h2>
          <p className="mt-1 text-xs text-white-200 md:text-sm">{subtitle}</p>
        </div>
        <span className="rounded-full border border-white/[0.12] px-2 py-1 text-xs text-white-200">
          {items.length}
        </span>
      </div>

      <div className="space-y-2.5">
        {items.map((item) => (
          <ProjectRow key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

const RecentProjects = () => {
  const sortedProjects = [...projects].sort((a, b) => b.id - a.id);
  const storeApps = sortedProjects.filter((item) => isStoreApp(item.link));
  const webProjects = sortedProjects.filter((item) => !isStoreApp(item.link));

  return (
    <div className="py-14 md:py-20">
      <h1 className="heading">
        Portafolio <span className="text-purple">organizado por categoría</span>
      </h1>

      <div className="mt-10 grid grid-cols-1 gap-6 xl:grid-cols-2 xl:gap-8">
        <CategoryColumn
          title="Proyectos Web"
          subtitle="Sitios corporativos, landings y plataformas"
          items={webProjects}
        />

        <CategoryColumn
          title="Apps en la tienda"
          subtitle="Aplicaciones publicadas en App Store"
          items={storeApps}
        />
      </div>
    </div>
  );
};

export default RecentProjects;
