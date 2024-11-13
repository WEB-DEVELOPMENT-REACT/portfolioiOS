"use client";

import { navItems } from "@/data";
import Approach from "@/components/Approach";
import { FloatingNav } from "@/components/ui/FloatingNavbar";



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
