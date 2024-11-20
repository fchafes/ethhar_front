export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { type, uid } = req.body; // Asegúrate de que el webhook te está enviando el 'type' y 'uid' del artículo

    // Revalida según el tipo de artículo
    if (type === "articulo_investigacion" || type === "congresos") {
      // Si es de tipo "articulo_investigacion" o "congresos", revalida la página "/investigacion"
      await res.revalidate("/investigacion");
    } else if (type === "articulo_prensa") {
      // Si es de tipo "articulo_prensa", revalida la página "/prensa"
      await res.revalidate("/prensa");
    } else {
      console.log("Tipo no reconocido o no requiere revalidación");
    }

    return res.status(200).json({ message: "Revalidación exitosa" });
  } catch (err) {
    console.error("Error de revalidación:", err);
    return res.status(500).json({ message: "Error al revalidar" });
  }
}
