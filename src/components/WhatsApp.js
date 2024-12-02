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
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} 
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: isHovered ? "#1DA851" : "#25D366", 
        padding: "10px 20px",
        borderRadius: "50px",
        textDecoration: "none",
        color: "#fff",
        fontWeight: "bold",
        position: "fixed",
        bottom: "20px",
        left: "20px",
        zIndex: 1000,
        boxShadow: isHovered
          ? "0 8px 12px rgba(0, 0, 0, 0.2)" 
          : "0 4px 6px rgba(0, 0, 0, 0.1)", 
        transform: isHovered ? "scale(1.05)" : "scale(1)", 
        transition: "all 0.3s ease", 
        cursor: "pointer", 
      }}
    >
      <img
        src="ethhar_images/whatsapp_icon.png"
        alt="WhatsApp"
        style={{
          marginRight: "10px",
          width: "24px",
          height: "24px",
          transition: "transform 0.3s ease",
          transform: isHovered ? "rotate(15deg)" : "rotate(0deg)",
        }}
      />
      WhatsApp
    </a>
  );
};

export default BotonWhatsApp;
