import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { plan, mode, name, email, message } = req.body;

    // Configura el transportador de Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Configura las opciones del correo
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
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
