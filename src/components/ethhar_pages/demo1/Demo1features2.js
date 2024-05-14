const Demo1features2 = () => {
  return (
    <section
      id="features-2"
      className="wide-60 features-section division"
      style={{ paddingTop: "100px" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-10">
            <div className="section-title title-02 mb-60">
              <h2 className="h2-xs" style={{ fontSize: "2.4rem", fontWeight: "700" }}>
                Múltiples beneficios con sólo unos clicks
              </h2>
            </div>
          </div>
        </div>
        {/* FEATURES-2 WRAPPER */}
        <div className="fbox-2-wrapper text-center">
          <div className="row row-cols-1 row-cols-md-3">
            {/* FEATURE BOX #1 */}
            <div className="col">
              <div className="fbox-2 mb-40 wow fadeInUp">
                {/* Icon */}
                <div className="fbox-ico-center ico-65 shape-ico white-color">
                  <span className="flaticon-user" />
                </div>
                {/* Text */}
                <div className="fbox-txt-center">
                  {/* Title */}
                  <h5 className="h5-md">Regístrate</h5>
                  {/* Text */}
                  <p className="p-lg">
                    Regístrate como usuario dentro de nuestra platafroma, es
                    rápido y sencillo
                  </p>
                </div>
              </div>
            </div>
            {/* FEATURE BOX #2 */}
            <div className="col">
              <div className="fbox-2 mb-40 wow fadeInUp">
                {/* Icon */}
                <div className="fbox-ico-center ico-65 shape-ico white-color">
                  <span className="flaticon-web-browser" />
                </div>
                {/* Text */}
                <div className="fbox-txt-center">
                  {/* Title */}
                  <h5 className="h5-md">Completar cuestionario</h5>
                  {/* Text */}
                  <p className="p-lg">
                    A partir de tus respuesta podemos personalizar la playlist.
                  </p>
                </div>
              </div>
            </div>
            {/* FEATURE BOX #3 */}
            <div className="col">
              <div className="fbox-2 mb-40 wow fadeInUp">
                {/* Icon */}
                <div className="fbox-ico-center ico-65 shape-ico white-color">
                  <span className="flaticon-play" />
                </div>
                {/* Text */}
                <div className="fbox-txt-center">
                  {/* Title */}
                  <h5 className="h5-md">Play</h5>
                  {/* Text */}
                  <p className="p-lg">
                    Comienza a disfrutar de Ethhar y conecta con tus recuerdos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END FEATURES-2 WRAPPER */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo1features2;
