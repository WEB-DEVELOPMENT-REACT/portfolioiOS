import { gridItems } from "@/data";
import React from "react";
import dynamic from "next/dynamic";
import { companies, testimonials } from "@/data";
import { it } from "node:test";
import Link from "next/link";

const BentoGrid = dynamic(() => import("./ui/BentoGrid").then(mod => ({ default: mod.BentoGrid })), {
  ssr: false,
});

const BentoGridItem = dynamic(() => import("./ui/BentoGrid").then(mod => ({ default: mod.BentoGridItem })), {
  ssr: false,
});


const Grid = () => {
  return (
    <section id="about">
     
      <BentoGrid className="w-full py-20">

        {gridItems.map((item, i) => (
          
          <BentoGridItem
          id={item.id}
          key={i}
          title={item.title}
          description={item.description}
          // remove icon prop
          // remove original classname condition
          className={item.className}
          img={item.img}
          imgClassName={item.imgClassName}
          titleClassName={item.titleClassName}
          spareImg={item.spareImg}
          link={item.link}
          />
        ))}
      </BentoGrid>
     
      
    </section>
    
  );
};

export default Grid;
