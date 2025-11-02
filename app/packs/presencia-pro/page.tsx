"use client";

import { navItems, packDetails } from "@/data";
import PackDetail from "@/components/PackDetail";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full py-20">
        <FloatingNav navItems={navItems} />
        <PackDetail slug="presencia-pro" details={packDetails["presencia-pro"]} />
      </div>
    </main>
  );
};

export default Page;
