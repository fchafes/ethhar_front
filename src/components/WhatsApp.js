import { useState } from "react";

const BotonWhatsApp = () => {
  const numeroTelefono = "59894011010";
  const mensaje = encodeURIComponent(
    "¡Hola! Me gustaría recibir más información sobre sus servicios."
  );
  const enlaceWhatsApp = `https://wa.me/${numeroTelefono}?text=${mensaje}`;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={enlaceWhatsApp}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)} // Detecta hover
      onMouseLeave={() => setIsHovered(false)} // Detecta salir del hover
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: isHovered ? "#1DA851" : "#25D366", // Cambia el color al hacer hover
        padding: "10px 20px",
        borderRadius: "50px",
        textDecoration: "none",
        color: "#fff",
        fontWeight: "bold",
        position: "fixed", // Botón flotante
        bottom: "20px",
        left: "20px",
        zIndex: 1000,
        boxShadow: isHovered
          ? "0 8px 12px rgba(0, 0, 0, 0.2)" // Más sombra en hover
          : "0 4px 6px rgba(0, 0, 0, 0.1)", // Menos sombra por defecto
        transform: isHovered ? "scale(1.05)" : "scale(1)", // Agranda el botón un poco
        transition: "all 0.3s ease", // Animación suave
        cursor: "pointer", // Cambia el cursor a mano
      }}
    >
      <img
        src="ethhar_images/whatsapp_icon.png" // Asegúrate de tener un ícono de WhatsApp en la carpeta pública
        alt="WhatsApp"
        style={{
          marginRight: "10px",
          width: "24px",
          height: "24px",
          transition: "transform 0.3s ease", // Suaviza el movimiento del ícono
          transform: isHovered ? "rotate(15deg)" : "rotate(0deg)", // Pequeña rotación al hacer hover
        }}
      />
      WhatsApp
    </a>
  );
};

export default BotonWhatsApp;
