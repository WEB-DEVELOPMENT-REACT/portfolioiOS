import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Teleprompter iOS - Información y Cumplimiento",
  description:
    "Información oficial de la app Teleprompter para iOS: funciones, privacidad, permisos, soporte y datos para App Review.",
  alternates: {
    canonical: "/teleprompter",
  },
};

const permissions = [
  {
    name: "Micrófono",
    use: "Grabación de video con audio desde la app.",
    required: "Solo cuando usas la función de grabación.",
  },
  {
    name: "Cámara",
    use: "Grabación de contenido usando el teleprompter.",
    required: "Solo cuando eliges grabar dentro de la app.",
  },
  {
    name: "Fotos / Biblioteca",
    use: "Guardar o importar guiones y videos.",
    required: "Solo cuando el usuario decide exportar o importar.",
  },
  {
    name: "Notificaciones",
    use: "Recordatorios opcionales de práctica o grabación.",
    required: "Opcional, configurable por el usuario.",
  },
];

const appReviewChecklist = [
  "La app no requiere cuenta obligatoria para funciones básicas de teleprompter.",
  "No se vende ni comparte información personal con terceros para marketing.",
  "Los permisos se solicitan en contexto y con propósito claro.",
  "La app incluye política de privacidad pública y contacto de soporte activo.",
  "La experiencia principal funciona sin depender de contenido externo bloqueante.",
];

export default function TeleprompterPage() {
  return (
    <main className="min-h-screen w-full bg-black-100 text-white">
      <div className="mx-auto max-w-5xl px-5 py-20">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-purple transition-colors hover:text-purple-dark"
        >
          ← Volver al inicio
        </Link>

        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          Teleprompter para iOS
        </h1>
        <p className="mb-2 text-white-200">
          Página oficial de producto, privacidad y soporte.
        </p>
        <p className="mb-10 text-sm text-white-200">
          <strong>Última actualización:</strong> 5 de marzo de 2026
        </p>

        <section className="mb-10 rounded-2xl border border-white/10 bg-black/30 p-6">
          <h2 className="mb-3 text-2xl font-semibold text-white">Resumen de la app</h2>
          <p className="text-white-200">
            Teleprompter ayuda a creadores, equipos comerciales y profesionales a leer guiones con
            fluidez mientras graban video. Permite ajustar velocidad, tamaño de texto, modo espejo
            y control de reproducción para grabaciones más naturales.
          </p>
        </section>

        <section className="mb-10 rounded-2xl border border-white/10 bg-black/30 p-6">
          <h2 className="mb-4 text-2xl font-semibold text-white">Permisos y uso</h2>
          <div className="grid gap-4">
            {permissions.map((permission) => (
              <article key={permission.name} className="rounded-xl border border-white/10 p-4">
                <h3 className="mb-2 text-lg font-semibold text-white">{permission.name}</h3>
                <p className="text-sm text-white-200">
                  <strong>Uso:</strong> {permission.use}
                </p>
                <p className="text-sm text-white-200">
                  <strong>Solicitud:</strong> {permission.required}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-10 rounded-2xl border border-white/10 bg-black/30 p-6">
          <h2 className="mb-3 text-2xl font-semibold text-white">Privacidad y datos</h2>
          <ul className="list-disc space-y-2 pl-5 text-white-200">
            <li>Los guiones y configuraciones pueden almacenarse localmente en el dispositivo.</li>
            <li>No se vende información personal a terceros.</li>
            <li>No se usan datos sensibles para publicidad personalizada.</li>
            <li>
              Si en el futuro se añade analítica, será anónima y se actualizará esta página con
              transparencia.
            </li>
          </ul>
        </section>

        <section className="mb-10 rounded-2xl border border-white/10 bg-black/30 p-6">
          <h2 className="mb-3 text-2xl font-semibold text-white">Notas para App Review (iOS)</h2>
          <ul className="list-disc space-y-2 pl-5 text-white-200">
            {appReviewChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-white-200">
            Si Apple solicita acceso de prueba, se proporcionarán credenciales temporales desde el
            panel de App Store Connect en el campo <strong>App Review Information</strong>.
          </p>
        </section>

        <section className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <h2 className="mb-3 text-2xl font-semibold text-white">Soporte y contacto</h2>
          <p className="mb-3 text-white-200">
            Para soporte técnico, dudas de privacidad o incidencias:
          </p>
          <p className="text-white-200">
            Email:{" "}
            <a href="mailto:desarrollador@elduverx.com" className="text-purple hover:underline">
              desarrollador@elduverx.com
            </a>
          </p>
          <p className="mt-2 text-sm text-white-200">
            Tiempo de respuesta estimado: 24-72 horas hábiles.
          </p>
        </section>
      </div>
    </main>
  );
}
