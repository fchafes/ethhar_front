import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { plan, mode, name, email, message } = req.body;

    console.log("SMTP_HOST:", process.env.SMTP_HOST);
    console.log("SMTP_PORT:", process.env.SMTP_PORT);
    console.log("SMTP_USER:", process.env.SMTP_USER);
    console.log("SMTP_PASS:", process.env.SMTP_PASS);

    // Configuracion del transportador de Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true, // True para puerto 465, false para otros puertos
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Configuracion de opciones del correo
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: `Formulario de contacto, mensaje de ${name}`,
      text: `Interes en el Plan: ${plan}\nEn Modo: ${mode}\nNombre del consultante: ${name}\nEmail del consultante: ${email}\nMensaje adicional: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Correo enviado con éxito" });
    } catch (error) {
      res.status(500).json({ error: "Error al enviar el correo" });
    }
  } else {
    res.status(405).json({ message: "Método no permitido" });
  }
}
