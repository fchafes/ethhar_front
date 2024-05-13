import { useState } from "react";

const Price = ({ color }) => {
  const [plan, setPlan] = useState("a");
  const handlePlan = (plan) => {
    setPlan(plan);
  };

  return (
    <section
      id="pricing-2"
      className="bg-whitesmoke wide-60 pricing-section division"
      style={{ paddingBottom: "100px", color: "#1d293f", position: "relative" }}
    >
      <div className="gradiente-price"></div>
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title title-01 mb-80">
              {/* Title */}
              <h2 className="h2-md" style={{ fontSize: "2.5em" }}>
                Comienza a conectar con tus recuerdos
              </h2>
              {/* Text */}
              <p className="p-xl" style={{ color: "#fff" }}>
                Encuentra el plan que se adapte mejor a tu necesidad:
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <button
                  className={`${
                    plan === "a" ? "focus-plan" : "non-focus-plan"
                  }`}
                  onClick={() => handlePlan("a")}
                >
                  Mensual
                </button>
                <button
                  className={`${
                    plan === "b" ? "focus-plan" : "non-focus-plan"
                  }`}
                  onClick={() => handlePlan("b")}
                >
                  6 meses
                </button>
                <button
                  className={`${
                    plan === "c" ? "focus-plan" : "non-focus-plan"
                  }`}
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
                      Dórico
                    </h5>
                    {/* <h6 className="h6-sm bg-lightgrey">Save 30%</h6> */}
                    <p className="p-md">Para uso personal</p>
                  </div>
                  {/* Price */}
                  <sup className="dark-color">$</sup>
                  <span className="dark-color">25</span>
                  <sup className="validity dark-color">/ USD por mes</sup>
                  {/* <p className="p-md">Billed as $96 per year</p> */}
                </div>
                {/* Plan Features  */}
                <ul className="features">
                  <li>
                    <p className="p-md">
                      <span className="flaticon-check" /> Playlist personalizada
                      de 30 minutos cada 21 días
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <span className="flaticon-check" /> Opciones para:
                      Ansiedad, reminiscencia y depresión
                    </p>
                  </li>
                </ul>
                {/* Pricing Plan Button */}
                <a
                  href="#contact-form"
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
                      Lidio
                    </h5>
                    {/* <h6 className="h6-sm bg-lightgrey">Save 30%</h6> */}
                    <p className="p-md">Para uso personal</p>
                  </div>
                  {/* Price */}
                  <sup className="dark-color">$</sup>
                  <span className="dark-color">150</span>
                  <sup className="validity dark-color">/ USD por mes</sup>
                  {/* <p className="p-md">Billed as $96 per year</p> */}
                </div>
                {/* Plan Features  */}
                <ul className="features">
                  <li>
                    <p className="p-md">Lo desglosado en Dórico más:</p>
                  </li>
                  <li>
                    <p className="p-md">
                      <span className="flaticon-check" /> Playlist personalizada
                      de 30 minutos cada 21 días
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <span className="flaticon-check" /> Opciones para:
                      Ansiedad, reminiscencia y depresión
                    </p>
                  </li>
                </ul>
                {/* Pricing Plan Button */}
                <a
                  href="#contact-form"
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

export default Price;
