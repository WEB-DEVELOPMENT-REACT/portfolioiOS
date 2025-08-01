"use client";

import { navItems } from "@/data";
import { Metadata } from "next";
import Approach from "@/components/Approach";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

export const metadata: Metadata = {
  title: "Stack Tecnológico - Herramientas y Tecnologías",
  description: "Descubre mi stack tecnológico: Swift, React Native, Next.js, TypeScript, Xcode, y más. Herramientas y tecnologías que utilizo para crear aplicaciones móviles y web de alta calidad.",
  keywords: ["stack tecnológico", "Swift", "React Native", "Next.js", "TypeScript", "Xcode", "herramientas desarrollo", "tecnologías"],
  openGraph: {
    title: "Stack Tecnológico - Duverney Muriel | Herramientas y Tecnologías",
    description: "Descubre mi stack tecnológico: Swift, React Native, Next.js, TypeScript y más herramientas para desarrollo móvil y web.",
    url: "/stack",
  },
};



const Page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full py-20">

        <FloatingNav navItems={navItems} />
        <Approach />
      </div>
    </main>
  );
};

export default Page;
