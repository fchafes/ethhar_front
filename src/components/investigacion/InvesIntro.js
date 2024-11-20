const InvesIntro = () => {
  return (
    <section
      id="content-2"
      className="content-2  division share-resp-custom"
      style={{
        overflow: "visible",
        position: "relative",
        maxWidth: "980px",
        marginBottom: "100px"
      }}
    >
      <div className="container">
        <div className="inves-h1-box"
        >
          <h1 className="inves-h1">Reconstruyendo recuerdos a través de la música.</h1>
        </div>
        <div className="row d-flex align-items-top">
          {/* IMAGE BLOCK */}
          <div className="col-md-5 col-lg-6 inves-intro-cont">
            <div className="rel img-block left-column wow fadeInRight inves-intro-img">
              <img
                className="img-fluid inves-intro-img"
                src="/ethhar_images/investigacion/inves_intro2.png"
                alt="content-image"
              />
            </div>
          </div>
          {/* TEXT BLOCK */}
          <div className="col-md-7 col-lg-6">
            <div className="txt-block right-column wow fadeInLeft">
              {/* Title */}
              {/* <h2
                className="h2-xs custom-mobile-title"
                style={{ fontSize: "2.2rem", fontWeight: "700" }}
              >
                {" "}
                Porque siempre hay una canción detrás de cada recuerdo.
              </h2> */}
              {/* Text */}
              <p className="p-sx" style={{ fontSize: "16px", color: "#666" }}>
                Las enfermedades neurodegenerativas son patologías progresivas e
                irreversibles que afectan a una proporción considerable de la
                población mundial.
                <br />
                <br /> Disminuyen la expectativa y la calidad de vida de los
                pacientes, y afectan directamente la vida de sus familias y su
                entorno, representando un desafío más que importante para la
                salud.
                <br />
                <br /> Si bien pueden abarcar diferentes afectaciones como el
                movimiento y la memoria, hay algo que a pesar del deterioro
                permanece intacto, que se asocia directamente a los recuerdos y
                que puede generar momentos de bienestar inmediatos, así como
                provocar mejoras a niveles cognitivos, emocionales y
                conductuales, la música.
                <br />
                <br /> En los últimos años numerosos estudios han demostrado que
                la música es un aliado más que considerable a tener en cuenta
                para afrontar los procesos vinculados a las enfermedades
                neurodegenerativas.
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

export default InvesIntro;
