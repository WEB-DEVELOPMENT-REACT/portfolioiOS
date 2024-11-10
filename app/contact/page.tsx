"use client";

import { navItems } from "@/data";
import Contact from "@/components/Contact";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full py-60">
        <FloatingNav navItems={navItems} />
      
        <Contact/>
      </div>
    </main>
  );
};

export default Page;
