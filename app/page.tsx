"use client";

import { navItems } from "@/data";
import { Metadata } from "next";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";

import { FloatingNav } from "@/components/ui/FloatingNavbar";

export const metadata: Metadata = {
  title: "Inicio - Desarrollador iOS & Mobile",
  description: "Bienvenido al portfolio de Duverney Muriel, desarrollador iOS y Mobile especializado en Swift, React Native y Next.js. Descubre mis proyectos y experiencia.",
  openGraph: {
    title: "Inicio - Duverney Muriel | Desarrollador iOS & Mobile",
    description: "Portfolio de desarrollador iOS y Mobile especializado en Swift, React Native y Next.js.",
    url: "/",
  },
};

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        {/* <RecentProjects />
        <Approach />
        <Experience />
        <Clients />
        */}

        <Footer />
      </div>
    </main>
  );
};

export default Home;