import { useState } from "react";

const ContactForm = ({ color }) => {
  const [formData, setFormData] = useState({
    plan: "",
    mode: "",
    name: "",
    email: "",
    message: "",
  });
  const [formularioEnviado, setFormularioEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.status === 200) {
        setFormularioEnviado(true);
        setFormData({
          plan: "",
          mode: "",
          name: "",
          email: "",
          message: "",
        });
      } else {
        console.error("Error al enviar el formulario:", await res.json());
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    } finally {
      setEnviando(false);
    }
  };

  const handlePlanSelection = (plan) => {
    setFormData({ ...formData, plan });
  };
  const handleModeSelection = (mode) => {
    setFormData({ ...formData, mode });
  };

  return (
    <section
      id="contact-form"
      className="content-2 wide-60 content-section division contact-custom-mobile"
      style={{ position: "relative", overflow: "visible" }}
    >
      <div className="gradiente-contact"></div>
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* TEXT BLOCK */}
          <div className="col-md-7 col-lg-5 contact-custom-col-mobile">
            <div className="txt-block right-column wow fadeInLeft">
              <form onSubmit={handleSubmit} method="POST">
                <input type="hidden" name="plan" value={formData.plan} />
                <input type="hidden" name="mode" value={formData.mode} />
                {/* Title */}
                <label htmlFor="plan" className="contacto-form-label">
                  Estoy interesado/a en el plan:
                </label>
                <div className="contacto-form-button-box">
                  <button
                    type="button"
                    onClick={() => handlePlanSelection("Individual")}
                    className={`btn btn-sm btn-tra-grey tra-${color}-hover contacto-form-button ${
                      formData.plan === "Individual"
                        ? "contacto-btn-input-selected"
                        : ""
                    }`}
                  >
                    Individual
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePlanSelection("Clinicas")}
                    className={`btn btn-sm btn-tra-grey tra-${color}-hover contacto-form-button ${
                      formData.plan === "Clinicas"
                        ? "contacto-btn-input-selected"
                        : ""
                    }`}
                  >
                    Clínicas
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePlanSelection("Talleres")}
                    className={`btn btn-sm btn-tra-grey tra-${color}-hover contacto-form-button ${
                      formData.plan === "Talleres"
                        ? "contacto-btn-input-selected"
                        : ""
                    }`}
                  >
                    Talleres
                  </button>
                </div>
                <label htmlFor="mode" className="contacto-form-label mt-3">
                  En la modalidad de contratación:
                </label>
                <div className="contacto-form-button-box">
                  <button
                    type="button"
                    onClick={() => handleModeSelection("Mensual")}
                    className={`btn btn-sm btn-tra-grey tra-${color}-hover contacto-form-button ${
                      formData.mode === "Mensual"
                        ? "contacto-btn-input-selected"
                        : ""
                    }`}
                  >
                    Mensual
                  </button>
                  <button
                    type="button"
                    onClick={() => handleModeSelection("Semestral")}
                    className={`btn btn-sm btn-tra-grey tra-${color}-hover contacto-form-button ${
                      formData.mode === "Semestral"
                        ? "contacto-btn-input-selected"
                        : ""
                    }`}
                  >
                    6 meses
                  </button>
                  <button
                    type="button"
                    onClick={() => handleModeSelection("Anual")}
                    className={`btn btn-sm btn-tra-grey tra-${color}-hover contacto-form-button ${
                      formData.mode === "Anual"
                        ? "contacto-btn-input-selected"
                        : ""
                    }`}
                  >
                    Anual
                  </button>
                </div>
                <label htmlFor="name" className="contacto-form-label mt-3">
                  Nombre:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="contacto-input"
                  placeholder="Manuel Rodriguez"
                />
                <label htmlFor="email" className="contacto-form-label mt-3">
                  Correo electrónico:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="contacto-input"
                  placeholder="manuelrod@email.com"
                />
                <label htmlFor="message" className="contacto-form-label mt-3">
                  Mensaje adicional:
                </label>
                <div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="contacto-textarea"
                    placeholder="Hola, quiero saber más sobre el plan Lidio..."
                  />
                </div>
                <div>
                  {formularioEnviado ? (
                    <div>
                      ¡Mensaje enviado! Nos pondremos en contacto a la brevedad.
                    </div>
                  ) : enviando ? (
                    <div>Enviando...</div>
                  ) : (
                    <button
                      type="submit"
                      className={`btn btn-sm btn-tra-grey tra-${color}-hover contacto-submit`}
                    >
                      Enviar mensaje
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
          {/* END TEXT BLOCK */}
          {/* IMAGE BLOCK */}
          <div
            className="col-md-5 col-lg-7"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <div className="rel img-block left-column wow fadeInRight contacto-img-box">
              <img
                className="img-fluid"
                src="/images/contacto-img.webp"
                alt="content-image"
              />
            </div>
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default ContactForm;
