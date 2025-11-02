"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  HomeIcon,
  ProjectsIcon,
  AboutIcon,
  StackIcon,
  PacksIcon,
  ContactIcon,
} from "@/components/NavIcons";

const iconMap: { [key: string]: React.FC } = {
  home: HomeIcon,
  projects: ProjectsIcon,
  about: AboutIcon,
  stack: StackIcon,
  packs: PacksIcon,
  contact: ContactIcon,
};

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: string;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
        className={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[9999] top-6 inset-x-0 mx-auto px-6 py-3 rounded-2xl items-center justify-center gap-2",
          className
        )}
        style={{
          backdropFilter: "blur(20px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.85)",
          borderRadius: "16px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        }}
      >
        {navItems.map((navItem: any, idx: number) => {
          const IconComponent = navItem.icon ? iconMap[navItem.icon] : null;
          return (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative group flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300",
                "text-white/80 hover:text-white hover:bg-white/10",
                "text-sm font-medium"
              )}
            >
              {IconComponent && (
                <span className="w-4 h-4 transition-transform group-hover:scale-110">
                  <IconComponent />
                </span>
              )}
              <span className="hidden sm:inline-block">{navItem.name}</span>
              <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};
