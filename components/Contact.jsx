"use client";
import { FaLocationArrow, FaWhatsapp } from "react-icons/fa6";
import { useState } from "react";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        telefono: "",
        email: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitMessage("¡Mensaje enviado! Te contactaremos pronto.");
                setFormData({ nombre: "", telefono: "", email: "" });
            } else {
                setSubmitMessage("Error al enviar. Por favor, intenta vía WhatsApp.");
            }
        } catch (error) {
            setSubmitMessage("Error al enviar. Por favor, intenta vía WhatsApp.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

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
                        ¿Listo para <span className="text-purple">impulsar</span> tu negocio digital?
                    </h1>
                    <p className="text-white-200 md:mt-10 my-5 text-center max-w-2xl">
                        Déjanos tus datos y te contactaremos en menos de 24h para una consultoría gratuita
                    </p>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="w-full max-w-md mt-10 mb-10 space-y-4">
                        <div>
                            <input
                                type="text"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                placeholder="Nombre completo *"
                                required
                                className="w-full px-4 py-3 bg-black-200 border border-white/10 rounded-lg text-white placeholder-white-200 focus:outline-none focus:border-purple transition-all"
                            />
                        </div>
                        <div>
                            <input
                                type="tel"
                                name="telefono"
                                value={formData.telefono}
                                onChange={handleChange}
                                placeholder="Teléfono / WhatsApp *"
                                required
                                className="w-full px-4 py-3 bg-black-200 border border-white/10 rounded-lg text-white placeholder-white-200 focus:outline-none focus:border-purple transition-all"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email (opcional)"
                                className="w-full px-4 py-3 bg-black-200 border border-white/10 rounded-lg text-white placeholder-white-200 focus:outline-none focus:border-purple transition-all"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                        >
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                {isSubmitting ? "Enviando..." : "Solicitar Consultoría Gratuita"}
                            </span>
                        </button>

                        {submitMessage && (
                            <p className={`text-center text-sm ${submitMessage.includes("Error") ? "text-red-400" : "text-green-400"}`}>
                                {submitMessage}
                            </p>
                        )}
                    </form>

                    <div className="w-full max-w-md border-t border-white/10 pt-8">
                        <p className="text-white-200 text-center mb-4 text-sm">O contáctanos directamente:</p>
                        <div className="flex gap-4 justify-center">
                            <a href="https://t.me/DuverxDev">
                                <MagicButton
                                    title="Telegram"
                                    icon={<FaLocationArrow />}
                                    position="right"
                                />
                            </a>
                            <a href="https://wa.me/+34673685542">
                                <MagicButton
                                    title="WhatsApp"
                                    icon={<FaWhatsapp />}
                                    position="right"
                                />
                            </a>
                        </div>
                    </div>
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
