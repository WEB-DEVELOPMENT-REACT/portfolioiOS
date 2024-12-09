import { gridItems } from "@/data";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { companies, testimonials } from "@/data";
import { it } from "node:test";
import Link from "next/link";


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
     
      
           <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5"
                />
                <img
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="md:w-24 w-20"
                />
              </div>
            </React.Fragment>
          ))}
        </div> 
    </section>
    
  );
};

export default Grid;
