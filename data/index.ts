export const navItems = [
  { name: "🏠", link: "/dashboard" },
  { name: "Proyectos", link: "/work" },
  { name: "Nosotros", link: "/aboutme" },
//  { name: "Projects", link: "#projects" },
  // { name: "Testimonios", link: "#testimonials" },
  // { name: "Experience", link: "/experience" },
  { name: "Stack", link: "/stack" },
  { name: "Contacto", link: "/contact" },
];

export const gridItems = [
  {
    id: 1,
     title: "Apasionado por el desarrollo Movil y Web",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Disponible en cualquier parte del mundo.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Mi stack tecnológico",
    description: "Experimentado con Swift & React Native",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tecnólogo apasionado por la ingenieria de software.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Si estas buscando un desarrollador frontend/Mobile en React, React Native and Swift para ios. Soy el indicado!",
    description: "Mis esenciales",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Empezamos un proyecto juntos?.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Real State UI",
    des: "En tiempo real puedes verla, dandole clic en el enlace",
    img: "/rst.webp",
    iconLists: ["/swift.png", "/xcod.png", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/appetize.io/embed/b_ruj7hfyuvwmkfst23ler76e4uq",
  },
  {
    id: 2,
    title: "Pedro Portfolio",
    des: "otra React app, hecha para mostrar la experiencia de un desarrollador web.",
    img: "/c1.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/portfolio-next-2022.vercel.app/",
  },
  {
    id: 3,
    title: "Cripto Market API",
    des: "Integrada una API de monedas virtuales con CoinGecko",
    img: "/c2.png",
    iconLists: ["/swift.png", "/xcod.png", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/appetize.io/embed/b_wgwvab4ehigj2fym4elzm2ggxe",
  },
  {
    id: 4,
    title: "Ayuda para el amor",
    des: "Desarrollada en Next.JS, similar a esta web.",
    img: "/rp-4.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/corazonnegro.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Incredible dedication and skill. Our project transformed thanks to his expertise in React Native and Swift.",
    name: "James Miller",
    title: "Product Manager at HealthSync",
    img: "/profile.svg"
  },
  {
    quote:
      "A skilled developer with attention to detail. He optimized our app for both platforms, increasing efficiency and user satisfaction.",
    name: "Emma Taylor",
    title: "Tech Lead at GreenHome Tech",
     img: "/profile4m.png"
  },
  {
    quote:
      "Exceeded expectations! The app was intuitive, high-quality, and seamless across Android and iOS.",
    name: "Daniel Martinez",
    title: "CEO at Ecomfy",
     img: "/profile1h.png"
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "",
    desc:"Trabajé en aplicaciones de React Native, desarrollando nuevas características y optimizando el rendimiento.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Mobile App Developer",
    desc:  "Delivered various projects, including React Native and Swift-based apps for clients.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const aboutMe = [
  {
    id: 1,
       title: "Desarrollador iOS - Enfoque en UI",
    desc: "creando interfaces intuitivas y fluidas. Implemento animaciones avanzadas con SwiftUI, mejorando la experiencia del usuario. Además, optimizo el rendimiento y diseño para garantizar aplicaciones rápidas y atractivas.",
 className: "md:col-span-2",
    thumbnail: "/ab1.png",
  },
  {
    id: 2,
    title: "Desarrollador Frontend - React & Next.js",
    desc: "Creo interfaces modernas y dinámicas con React y Next.js, utilizando bibliotecas como chadcn para estilos y estructura. Trabajo en la integración de APIs y mejoras de rendimiento para aplicaciones web.",
    className: "md:col-span-2",
    thumbnail: "/ab5.png",
  },
  {
    id: 3,
    title: "Desarrollador Móvil - Swift & iOS SDK",
    desc: "Desarrollo aplicaciones iOS en Swift, utilizando el SDK de Apple para aprovechar al máximo el sistema. Me especializo en crear interfaces de usuario atractivas y de alto rendimiento dentro del ecosistema iOS.",
 
    className: "md:col-span-2",
    thumbnail: "/image.gif",
  },
  {
    id: 4,
      title: "Pruebas Unitarias - iOS",
      desc: "Implemento pruebas unitarias en aplicaciones iOS utilizando XCTest para validar la lógica de negocio y funciones clave, asegurando un código confiable y escalable.",
      
  className: "md:col-span-2",
    thumbnail: "/ab4.png",
  },
  {
      id: 5,
      title: "Pruebas de Interfaz - iOS",
      desc: "Automatizo interacciones de usuario con XCUITest, verificando flujos de navegación, formularios y comportamientos clave en aplicaciones nativas.",
       className: "md:col-span-2",
      thumbnail: "/ab6.png",
  },
  {
    id: 6,
     title: "Análisis de Rendimiento",
      desc: "Utilizo herramientas como Instruments en iOS para identificar cuellos de botella y optimizar la eficiencia de las aplicaciones.",
     className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  }
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/elduverx"
  },
  {
    id: 2,
    img: "/hilos.png",
    link: "https://www.threads.net/@duverneyx"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/duverney-muriel-swift-developer/"
  },
];

