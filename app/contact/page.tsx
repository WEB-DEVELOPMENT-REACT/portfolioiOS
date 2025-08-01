"use client";

import { navItems } from "@/data";
import { Metadata } from "next";
import Contact from "@/components/Contact";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

export const metadata: Metadata = {
  title: "Contacto - Hablemos de tu Proyecto",
  description: "¿Tienes un proyecto en mente? Contacta conmigo para desarrollar tu aplicación iOS, móvil o web. Disponible para proyectos freelance y colaboraciones. Respuesta rápida garantizada.",
  keywords: ["contacto", "freelance", "proyecto iOS", "desarrollo móvil", "colaboración", "presupuesto", "consultoría"],
  openGraph: {
    title: "Contacto - Duverney Muriel | Hablemos de tu Proyecto",
    description: "¿Tienes un proyecto en mente? Contacta conmigo para desarrollar tu aplicación iOS, móvil o web.",
    url: "/contact",
  },
};

const Page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full pt-60">
        <FloatingNav navItems={navItems} />
      
        <Contact/>
      </div>
    </main>
  );
};

export default Page;
