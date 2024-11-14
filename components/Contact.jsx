import { FaLocationArrow, FaWhatsapp } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
    return (
        <div className="pb-20  w-full flex flex-col min-h-screen justify-between">
            <footer className="w-full relative" id="contact">
                {/* background grid */}
                <div className="w-full absolute left-0 -bottom-20">
                    <img
                        src="/footer-grid.svg"
                        alt="grid"
                        className="w-full h-full opacity-50"
                    />
                </div>

                <div className="flex pb-10 flex-col items-center">
                    <h1 className="heading lg:max-w-[45vw]">
                        Ready to take <span className="text-purple">your</span> digital
                        presence to the next level?
                    </h1>
                    <p className="text-white-200 md:mt-10 my-20 text-center">
                        Reach out to me today and let&apos;s discuss how I can help you
                        achieve your goals.
                    </p>
                    <a href="https://t.me/DuverxDev">
                        <MagicButton
                            title="Let's get in touch"
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </a>
                    <a className="mt-4" href="https://wa.me/+34673685542">
                        <MagicButton
                            title="Reach Me!"
                            icon={<FaWhatsapp />}
                            position="right"
                        />
                    </a>
                </div>
            </footer>

            {/* Footer Bottom Section */}
            <div className="flex md:flex-row flex-col justify-between items-center mt-auto mb-2">
                <p className="md:text-base text-sm md:font-normal font-light">
                    Copyright © 2024 Duver Muriel
                </p>

                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((info) => (
                        <div key={info.id}>
                            <a href={info.link}>
                                <div
                                    className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                                >
                                    <img src={info.img} alt="icons" width={20} height={20} />

                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Footer;
