"use client";

import { navItems } from "@/data";
import { Metadata } from "next";

import RecentProjects from "@/components/RecentProjects";

import { FloatingNav } from "@/components/ui/FloatingNavbar";

export const metadata: Metadata = {
  title: "Proyectos - Portfolio de Desarrollo Móvil",
  description: "Explora mi portfolio de aplicaciones iOS, webs profesionales y proyectos de desarrollo móvil. Especializado en Swift, React Native y Next.js con más de 10 proyectos completados.",
  keywords: ["portfolio", "proyectos iOS", "aplicaciones móviles", "Swift", "React Native", "Next.js", "desarrollo web"],
  openGraph: {
    title: "Proyectos - Duverney Muriel | Portfolio de Desarrollo Móvil",
    description: "Explora mi portfolio de aplicaciones iOS, webs profesionales y proyectos de desarrollo móvil.",
    url: "/work",
  },
};

const About = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full py-20">
        <FloatingNav navItems={navItems}  />
        <RecentProjects />
      </div>
    </main>
  );
};

export default About