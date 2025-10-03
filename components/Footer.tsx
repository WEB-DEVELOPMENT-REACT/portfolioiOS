"use client"
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import React from "react";

import { companies, testimonials } from "@/data";

import MagicButton from "./MagicButton";
import Link from "next/link";

const Footer = () => {
  return (
    
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
    
 
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Estas listo para incrementar <span className="text-purple">tu presencia </span>digital a otro nivel ?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Contáctame hoy y hablemos de como puedo ayudarte a alcanzar tus metas.
        </p>
        <Link href="/contact">
          <MagicButton
            title="Contáctame!"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2024 Duver Muriel
          </p>
          <span className="hidden md:inline text-white-200">•</span>
          <Link href="/privacy-policy" className="md:text-base text-sm md:font-normal font-light text-white-200 hover:text-purple transition-colors">
            Políticas de Privacidad
          </Link>
        </div>

        <div className="flex items-center md:gap-3 gap-6 mt-4 md:mt-0">
          {socialMedia.map((info) => (
            <div key={info.id}>

            <a href={info.link}>
                            <div
                                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                                <img src={info.img} alt="icons" width={20} height={20} />

                            </div>
             </a>
         </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
