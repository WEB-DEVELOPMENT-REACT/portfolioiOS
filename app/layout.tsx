import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Duverney Muriel | iOS & Mobile Developer",
    template: "%s | Duverney Muriel"
  },
  description: "Desarrollador iOS y Mobile especializado en Swift, React Native y Next.js. Creo aplicaciones móviles modernas, eficientes y escalables con enfoque en experiencia de usuario excepcional. Disponible para proyectos freelance.",
  keywords: ["iOS Developer", "Swift Developer", "React Native", "Mobile App Development", "Frontend Developer", "Next.js", "TypeScript", "Freelance Developer"],
  authors: [{ name: "Duverney Muriel" }],
  creator: "Duverney Muriel",
  publisher: "Duverney Muriel",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://elduverx.com",
    siteName: "Duverney Muriel - iOS & Mobile Developer",
    title: "Duverney Muriel | iOS & Mobile Developer",
    description: "Desarrollador iOS y Mobile especializado en Swift, React Native y Next.js. Creo aplicaciones móviles modernas con enfoque en experiencia de usuario excepcional.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Duverney Muriel - iOS & Mobile Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Duverney Muriel | iOS & Mobile Developer",
    description: "Desarrollador iOS y Mobile especializado en Swift, React Native y Next.js.",
    images: ["/og-image.jpg"],
  },
  metadataBase: new URL("https://elduverx.com"),
  alternates: {
    canonical: "/",
  },
};



export default function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
