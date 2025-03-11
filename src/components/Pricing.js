import { useState } from "react";

const Pricing = ({ color }) => {
  const [plan, setPlan] = useState("a");
  const handlePlan = (plan) => {
    setPlan(plan);
  };
  const numeroTelefono = "59894011010";
  const msjIndividual = encodeURIComponent(
    "¡Hola! Estoy interesado en el plan Individual."
  );
  const msjClinicas = encodeURIComponent(
    "¡Hola! Estoy interesado en el plan Clínicas."
  );
  const msjTalleres = encodeURIComponent(
    "¡Hola! Estoy interesado en el plan Talleres."
  );

  return (
    <section
      id="pricing-2"
      className="bg-whitesmoke wide-60 pricing-section division custom-price-mobile"
      style={{ paddingBottom: "100px", color: "#1d293f", position: "relative" }}
    >
      <div className="gradiente-price"></div>
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title title-01 mb-80">
              {/* Title */}
              <h2
                className="h2-md custom-mobile-title"
                style={{ fontSize: "2.3em", fontWeight: "700" }}
              >
                Comienza a conectar con tus recuerdos
              </h2>
              {/* Text */}
              <p className="p-xl" style={{ color: "#fff" }}>
                Encuentra el plan que se adapte mejor a tu necesidad:
              </p>

              <div
                className="price-plan-custom"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <button
                  className={`${
                    plan === "a" ? "focus-plan" : "non-focus-plan"
                  } custom-button-mobile`}
                  onClick={() => handlePlan("a")}
                >
                  Mensual
                </button>
                <button
                  className={`${
                    plan === "b" ? "focus-plan" : "non-focus-plan"
                  } custom-button-mobile`}
                  onClick={() => handlePlan("b")}
                >
                  6 meses
                </button>
                <button
                  className={`${
                    plan === "c" ? "focus-plan" : "non-focus-plan"
                  } custom-button-mobile`}
                  onClick={() => handlePlan("c")}
                >
                  Anual
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* PRICING TABLES */}
        <div className="pricing-2-row pc-25">
          <div
            className="row row-cols-1 row-cols-md-3"
            style={{ justifyContent: "center" }}
          >
            {/* BASIC PLAN */}
            <div className="col">
              <div
                className="pricing-2-table mb-40 wow fadeInUp"
                style={{ backgroundColor: "#ececec" }}
              >
                {/* Plan Price */}
                <div className="pricing-plan">
                  {/* Plan Title */}
                  <div className="pricing-plan-title">
                    <h5 className="h5-xs" style={{ color: "#1d293f" }}>
                      Individual
                    </h5>
                    {/* <h6 className="h6-sm bg-lightgrey">Save 30%</h6> */}
                    <p className="p-md">Para uso personal</p>
                  </div>
                  {/* Price */}
                  <sup className="dark-color">USD</sup>
                  {plan === "a" ? (
                    <span className="dark-color">15.00</span>
                  ) : plan === "b" ? (
                    <span className="dark-color">14.00</span>
                  ) : plan === "c" ? (
                    <span className="dark-color">12.50</span>
                  ) : (
                    <span className="dark-color">15.00</span>
                  )}
                  <sup
                    className="validity dark-color"
                    style={{
                      display: "block",
                      marginTop: "0.5em",
                      marginBottom: "1.5em",
                    }}
                  >
                    por mes
                  </sup>
                  <p style={{ fontSize: "0.9em", color: "#777777" }}>
                    *Los precios no incluyen impuestos.
                  </p>
                  {/* <p className="p-md">Billed as $96 per year</p> */}
                </div>
                {/* Plan Features  */}
                <ul className="features custom-ul-price-mobile">
                  <li>
                    <p className="p-md">
                      <span className="flaticon-check" /> Acceso a Playlist
                      personalizadas.
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <span className="flaticon-check" /> Opciones para:
                      Memoria, Calma y Energía.
                    </p>
                  </li>
                </ul>
                {/* Pricing Plan Button */}
                <a
                  href={`https://wa.me/${numeroTelefono}?text=${msjIndividual}`}
                  target="_blank"
                  className={`btn btn-sm btn-tra-grey tra-${color}-hover`}
                  style={{ backgroundColor: "#032886", color: "#fff" }}
                >
                  Contratar este plan
                </a>
              </div>
            </div>
            {/* END BASIC PLAN */}
            {/* BASIC PLAN */}
            <div className="col">
              <div
                className="pricing-2-table mb-40 wow fadeInUp"
                style={{ backgroundColor: "#ececec" }}
              >
                {/* Plan Price */}
                <div className="pricing-plan">
                  {/* Plan Title */}
                  <div className="pricing-plan-title">
                    <h5 className="h5-xs" style={{ color: "#1d293f" }}>
                      Clínicas
                    </h5>
                    {/* <h6 className="h6-sm bg-lightgrey">Save 30%</h6> */}
                    <p className="p-md">Para uso en instituciones</p>
                  </div>
                  {/* Price */}
                  <sup className="dark-color">USD</sup>
                  {plan === "a" ? (
                    <span className="dark-color">17.00</span>
                  ) : plan === "b" ? (
                    <span className="dark-color">16.00</span>
                  ) : plan === "c" ? (
                    <span className="dark-color">14.50</span>
                  ) : (
                    <span className="dark-color">17.00</span>
                  )}
                  <sup
                    className="validity dark-color"
                    style={{
                      display: "block",
                      marginTop: "0.5em",
                      marginBottom: "1.5em",
                    }}
                  >
                    por mes, por usuario
                  </sup>
                  <p style={{ fontSize: "0.9em", color: "#777777" }}>
                    *Los precios no incluyen impuestos.
                  </p>
                </div>
                {/* Plan Features  */}
                <ul className="features custom-ul-price-mobile">
                  <li>
                    <p className="p-sx" style={{ fontSize: "16px" }}>
                      <span className="flaticon-check" /> Acceso a Playlist
                      personalizadas.
                    </p>
                  </li>
                  <li>
                    <p className="p-sx" style={{ fontSize: "16px" }}>
                      <span className="flaticon-check" /> Opciones para: calma,
                      memoria y energía.
                    </p>
                  </li>
                  <li>
                    <p className="p-sx" style={{ fontSize: "16px" }}>
                      <span className="flaticon-check" /> Personal de Ethhar por
                      dos semanas para realizar intervenciones musicales:
                    </p>
                    <p className="p-sx" style={{ fontSize: "15px" }}>
                      • Cuidadores: capacitar en las presentaciones de Ethhar y
                      sus funcionalidades.
                    </p>
                    <p className="p-sx" style={{ fontSize: "15px" }}>
                      • Pacientes: generar confianza y empatía en la
                      incorporación de la intervención musical.
                    </p>
                  </li>
                  <li>
                    <p className="p-sx" style={{ fontSize: "16px" }}>
                      <span className="flaticon-check" /> Descuento por volumen
                      de socios:
                    </p>
                    <p className="p-sx" style={{ fontSize: "15px" }}>
                      • 10% por más de 15 socios adheridos
                    </p>
                  </li>
                </ul>
                {/* Pricing Plan Button */}
                <a
                  href={`https://wa.me/${numeroTelefono}?text=${msjClinicas}`}
                  target="_blank"
                  className={`btn btn-sm btn-tra-grey tra-${color}-hover`}
                  style={{ backgroundColor: "#032886", color: "#fff" }}
                >
                  Contratar este plan
                </a>
              </div>
            </div>
            {/* END BASIC PLAN */}
            {/* BASIC PLAN */}
            <div className="col">
              <div
                className="pricing-2-table mb-40 wow fadeInUp"
                style={{ backgroundColor: "#ececec" }}
              >
                {/* Plan Price */}
                <div className="pricing-plan">
                  {/* Plan Title */}
                  <div className="pricing-plan-title">
                    <h5 className="h5-xs" style={{ color: "#1d293f" }}>
                      Talleres
                    </h5>
                    <p className="p-md">Para uso en instituciones</p>
                  </div>
                  {/* Price */}
                  <span className="dark-color" style={{ fontSize: "2em" }}>
                    Consultar precio
                  </span>
                </div>
                {/* Plan Features  */}
                <ul className="features custom-ul-price-mobile">
                  <li>
                    <p className="p-sx" style={{ fontSize: "16px" }}>
                      <span className="flaticon-check" /> Talleres de música con
                      el uso de la aplicación de dos horas para los residentes
                      de cada residencial, una vez por semana, dividida en dos
                      instancias:
                    </p>
                    <p className="p-sx" style={{ fontSize: "15px" }}>
                      • Taller grupal de una hora de duración.
                    </p>
                    <p className="p-sx" style={{ fontSize: "15px" }}>
                      • Una hora de secciones individuales de 20 minutos, con
                      seis residentes.
                    </p>
                  </li>
                  <li>
                    <p className="p-sx" style={{ fontSize: "16px" }}>
                      <span className="flaticon-check" /> Acceso a playlists
                      personalizadas con opciones de Memoria, Calma y Energía
                      para todos los residentes del residencial.
                    </p>
                  </li>
                </ul>
                {/* Pricing Plan Button */}
                <a
                  href={`https://wa.me/${numeroTelefono}?text=${msjTalleres}`}
                  target="_blank"
                  className={`btn btn-sm btn-tra-grey tra-${color}-hover`}
                  style={{ backgroundColor: "#032886", color: "#fff" }}
                >
                  Contratar este plan
                </a>
              </div>
            </div>
            {/* END BASIC PLAN */}
          </div>
        </div>
        {/* END PRICING TABLES */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Pricing;
