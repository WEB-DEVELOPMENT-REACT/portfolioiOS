import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacidad - Organizate",
  description:
    "Política de privacidad de Organizate, app iOS para organizar tu día por categorías, listas y tareas.",
  alternates: {
    canonical: "/privacy",
  },
};

const features = [
  "Crear categorías personalizadas (Casa, Trabajo, Gym, Compras, etc.).",
  "Crear listas dentro de cada categoría para organizarte mejor.",
  "Añadir tareas con notas y adjuntos (foto o video).",
  "Marcar tareas como completadas con una interfaz rápida y clara.",
  "Reordenar categorías y listas para adaptar la app a tu estilo.",
  "Recibir recordatorios locales para no olvidar lo importante.",
  "Diseñada para ser práctica, limpia y enfocada en lo esencial.",
  "Sin complicaciones. Sin ruido. Solo organización real para tu día a día.",
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen w-full bg-black-100 text-white">
      <div className="mx-auto max-w-4xl px-5 py-20">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-purple transition-colors hover:text-purple-dark"
        >
          ← Volver al inicio
        </Link>

        <h1 className="mb-6 text-4xl font-bold md:text-5xl">Política de Privacidad</h1>

        <p className="mb-8 text-white-200">
          <strong>App:</strong> Organizate<br />
          <strong>Última actualización:</strong> 12 de febrero de 2026
        </p>

        <section className="space-y-5 text-white-200">
          <p>
            Organizate organiza tu vida de forma simple: por categorías y listas, como realmente
            piensas tu día.
          </p>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-white">Con Organizate puedes:</h2>
            <ul className="list-disc space-y-2 pl-6">
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-white">Datos y almacenamiento</h2>
            <p>
              Tu información se guarda localmente en tu dispositivo. No vendemos tu información
              personal ni la compartimos con terceros con fines comerciales.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-white">Permisos del dispositivo</h2>
            <p>
              Organizate puede solicitar acceso a cámara, fotos y notificaciones únicamente para
              funciones de la app como adjuntar contenido y crear recordatorios locales.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-white">Contacto</h2>
            <p>
              Si tienes preguntas sobre esta política, puedes escribir a
              {" "}
              <a
                href="mailto:desarrollador@elduverx.com"
                className="text-purple hover:underline"
              >
                desarrollador@elduverx.com
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
