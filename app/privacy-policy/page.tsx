"use client"
import React from "react";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen w-full bg-black-100">
      <div className="max-w-4xl mx-auto px-5 py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-purple hover:text-purple-dark transition-colors mb-8"
        >
          ← Volver al inicio
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Políticas de Privacidad
        </h1>

        <p className="text-white-200 mb-6">
          <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="space-y-8 text-white-200">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Información General</h2>
            <p className="mb-4">
              Duver Muriel se compromete a proteger su privacidad.
              Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos
              su información cuando visita nuestro sitio web o utiliza nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Información que Recopilamos</h2>
            <p className="mb-4">Recopilamos los siguientes tipos de información:</p>

            <h3 className="text-xl font-semibold text-white mb-3">2.1 Información Personal</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Nombre completo:</strong> Para personalizar la comunicación y gestionar solicitudes.</li>
              <li><strong>Correo electrónico:</strong> Para responder a consultas y enviar información relevante.</li>
              <li><strong>Número de teléfono:</strong> Para contacto directo cuando sea necesario.</li>
              <li><strong>Empresa/Organización:</strong> Para comprender mejor el contexto de su consulta.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">2.2 Información de Uso</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Dirección IP:</strong> Para análisis de tráfico y seguridad.</li>
              <li><strong>Tipo de navegador y dispositivo:</strong> Para optimizar la experiencia del usuario.</li>
              <li><strong>Páginas visitadas:</strong> Para mejorar el contenido y la navegación.</li>
              <li><strong>Tiempo de permanencia:</strong> Para análisis de comportamiento del usuario.</li>
              <li><strong>Cookies y tecnologías similares:</strong> Para mejorar la funcionalidad del sitio.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">2.3 Información de Proyectos</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Descripción del proyecto:</strong> Para evaluar requisitos y proporcionar presupuestos.</li>
              <li><strong>Requisitos técnicos:</strong> Para planificar el desarrollo adecuado.</li>
              <li><strong>Presupuesto estimado:</strong> Para ajustar propuestas a sus necesidades.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Cómo Usamos su Información</h2>
            <p className="mb-4">Utilizamos la información recopilada para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responder a sus consultas y solicitudes de contacto</li>
              <li>Proporcionar y mejorar nuestros servicios</li>
              <li>Enviar actualizaciones sobre proyectos en curso</li>
              <li>Analizar el uso del sitio web para mejoras</li>
              <li>Prevenir fraudes y garantizar la seguridad</li>
              <li>Cumplir con obligaciones legales</li>
              <li>Enviar comunicaciones de marketing (solo con su consentimiento)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Compartir Información</h2>
            <p className="mb-4">
              No vendemos, alquilamos ni compartimos su información personal con terceros, excepto en las siguientes circunstancias:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Proveedores de servicios:</strong> Compartimos información con proveedores que nos ayudan a operar nuestro sitio web (hosting, análisis, email).</li>
              <li><strong>Requisitos legales:</strong> Cuando sea requerido por ley o para proteger nuestros derechos.</li>
              <li><strong>Consentimiento:</strong> Cuando usted nos autorice explícitamente.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Cookies</h2>
            <p className="mb-4">
              Utilizamos cookies y tecnologías similares para mejorar su experiencia. Las cookies son pequeños archivos
              que se almacenan en su dispositivo. Puede configurar su navegador para rechazar cookies, aunque esto
              puede afectar la funcionalidad del sitio.
            </p>
            <p className="mb-2">Tipos de cookies que utilizamos:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento del sitio</li>
              <li><strong>Cookies de análisis:</strong> Para entender cómo los usuarios interactúan con el sitio</li>
              <li><strong>Cookies de funcionalidad:</strong> Para recordar sus preferencias</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Seguridad de Datos</h2>
            <p className="mb-4">
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información
              personal contra acceso no autorizado, alteración, divulgación o destrucción. Estas medidas incluyen:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cifrado SSL/TLS para transmisión de datos</li>
              <li>Acceso restringido a información personal</li>
              <li>Monitoreo regular de seguridad</li>
              <li>Copias de seguridad regulares</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Retención de Datos</h2>
            <p className="mb-4">
              Conservamos su información personal solo durante el tiempo necesario para cumplir con los propósitos
              descritos en esta política, a menos que la ley requiera o permita un período de retención más largo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Sus Derechos</h2>
            <p className="mb-4">Usted tiene derecho a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Acceso:</strong> Solicitar información sobre los datos que tenemos sobre usted</li>
              <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos</li>
              <li><strong>Eliminación:</strong> Solicitar la eliminación de sus datos personales</li>
              <li><strong>Restricción:</strong> Solicitar la limitación del procesamiento de sus datos</li>
              <li><strong>Portabilidad:</strong> Solicitar una copia de sus datos en formato estructurado</li>
              <li><strong>Oposición:</strong> Oponerse al procesamiento de sus datos personales</li>
              <li><strong>Revocación del consentimiento:</strong> Retirar su consentimiento en cualquier momento</li>
            </ul>
            <p className="mt-4">
              Para ejercer estos derechos, contáctenos a través de: <a href="mailto:desarrollador@duverxmobiledev.es" className="text-purple hover:underline">desarrollador@duverxmobiledev</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Menores de Edad</h2>
            <p className="mb-4">
              Nuestros servicios no están dirigidos a menores de 13 años. No recopilamos intencionalmente información
              personal de menores. Si descubrimos que hemos recopilado información de un menor sin consentimiento parental,
              eliminaremos esa información inmediatamente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Enlaces a Sitios de Terceros</h2>
            <p className="mb-4">
              Nuestro sitio web puede contener enlaces a sitios de terceros. No somos responsables de las prácticas
              de privacidad de estos sitios. Le recomendamos revisar sus políticas de privacidad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Cambios a esta Política</h2>
            <p className="mb-4">
              Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Los cambios
              serán efectivos inmediatamente después de su publicación en esta página. Le notificaremos sobre cambios
              significativos a través de un aviso destacado en nuestro sitio web o por correo electrónico.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Transferencias Internacionales</h2>
            <p className="mb-4">
              Su información puede ser transferida y almacenada en servidores ubicados fuera de su país de residencia.
              Nos aseguramos de que estas transferencias cumplan con las leyes de protección de datos aplicables.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. Información de Contacto</h2>
            <p className="mb-4">
              Si tiene preguntas, preocupaciones o solicitudes relacionadas con esta Política de Privacidad,
              puede contactarnos a través de:
            </p>
            <ul className="space-y-2">
              <li><strong>Email:</strong> <a href="mailto:desarrollador@duverxmobiledev.es" className="text-purple hover:underline">desarrollador@duverxmobiledev.es</a></li>
              <li><strong>Sitio web:</strong> <a href="https://elduverx.com" className="text-purple hover:underline">elduverx.com</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">14. Consentimiento</h2>
            <p className="mb-4">
              Al usar nuestro sitio web y servicios, usted acepta los términos de esta Política de Privacidad
              y consiente el procesamiento de su información personal como se describe aquí.
            </p>
          </section>

          <section className="border-t border-white-200 pt-8 mt-12">
            <p className="text-sm">
              Esta política de privacidad cumple con las regulaciones aplicables, incluyendo GDPR (Reglamento General
              de Protección de Datos de la UE) y requisitos de privacidad de Google Play Store.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
