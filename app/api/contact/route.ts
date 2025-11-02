import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { nombre, telefono, email } = await request.json();

    // Validación básica
    if (!nombre || !telefono) {
      return NextResponse.json(
        { error: "Nombre y teléfono son requeridos" },
        { status: 400 }
      );
    }

    // Configurar el email usando Resend (necesitas instalar: npm install resend)
    // O usar nodemailer si prefieres
    const emailBody = `
      Nueva solicitud de contacto:

      Nombre: ${nombre}
      Teléfono: ${telefono}
      Email: ${email || "No proporcionado"}

      Fecha: ${new Date().toLocaleString("es-ES")}
    `;

    // Aquí puedes integrar tu servicio de email preferido
    // Ejemplo con fetch a un webhook de n8n, make.com, zapier, etc:

    // OPCIÓN 1: Webhook (más simple)
    // const webhookUrl = process.env.WEBHOOK_URL; // Agregar en .env.local
    // await fetch(webhookUrl, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ nombre, telefono, email }),
    // });

    // OPCIÓN 2: Resend (servicio de email moderno)
    // const { Resend } = require("resend");
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "contacto@tudominio.com",
    //   to: "tu-email@gmail.com",
    //   subject: `Nuevo contacto: ${nombre}`,
    //   text: emailBody,
    // });

    // Por ahora, solo log (reemplaza con tu integración)
    console.log("Nuevo contacto:", { nombre, telefono, email });

    return NextResponse.json(
      { message: "Contacto recibido correctamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al procesar contacto:", error);
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}
