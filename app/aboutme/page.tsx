"use client";

import { navItems } from "@/data";
import { Metadata } from "next";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import AboutMe from "@/components/Aboutme";

export const metadata: Metadata = {
  title: "Sobre Mí - Desarrollador iOS & Mobile",
  description: "Conoce más sobre mi experiencia como desarrollador iOS y Mobile. Especializado en Swift, React Native, pruebas unitarias y optimización de rendimiento. Apasionado por crear aplicaciones de alta calidad.",
  keywords: ["desarrollador iOS", "Swift developer", "React Native", "experiencia profesional", "pruebas unitarias", "XCTest", "sobre mí"],
  openGraph: {
    title: "Sobre Mí - Duverney Muriel | Desarrollador iOS & Mobile",
    description: "Conoce más sobre mi experiencia como desarrollador iOS y Mobile especializado en Swift y React Native.",
    url: "/aboutme",
  },
};



const Page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full py-20">

        <FloatingNav navItems={navItems} />
        <AboutMe/>
      </div>
    </main>
  );
};

export default Page;
