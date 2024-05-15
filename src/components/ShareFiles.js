const ShareFiles = ({ flexible }) => {
  return (
    <section
      id="content-2"
      className="content-2 wide-60 content-section division share-resp-custom"
      style={{
        overflow: "visible",
        position: "relative",
        paddingBottom: "0",
        paddingTop: "130px",
      }}
    >
      <div className="gradiente-2"></div>
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* IMAGE BLOCK */}
          <div className="col-md-5 col-lg-6">
            <div className="rel img-block left-column wow fadeInRight">
              <img
                className="img-fluid"
                src="/images/share_prueba.webp"
                alt="content-image"
                style={{
                  height: "400px",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />
            </div>
          </div>
          {/* TEXT BLOCK */}
          <div className="col-md-7 col-lg-6">
            <div className="txt-block right-column wow fadeInLeft">
              {/* Title */}
              <h2 className="h2-xs" style={{ fontSize: "2.2rem", fontWeight: "700" }}>
                {" "}
                Porque siempre hay una canción detrás de cada recuerdo.
              </h2>
              {/* Text */}
              <p className="p-sx">
                Reconstruimos recuerdos autobiográficos a través de la{" "}
                <strong>escucha de música personalizada</strong>, logrando
                mejoras en aspectos de
                <strong>memoria, cognitivos, emocionales y conductuales</strong>
                .
              </p>
              {/* Text */}
              <p className="p-sx">
                Una solución alternativa,{" "}
                <strong>no invasiva, no farmacológica</strong> y personalizada,
                enfocada en apoyar y potenciar las actividades cotidianas,{" "}
                <strong>
                  facilitando las tareas de familiares y cuidadores
                </strong>
                .
              </p>
            </div>
          </div>
          {/* END TEXT BLOCK */}
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default ShareFiles;
