import { VideoWithBtn } from "../../VideoContent";

const Demo1Hero1 = ({ onReproducirVideo }) => {
  return (
    <section
      id="hero-1"
      className="bg-scroll hero-section division pb-4"
      style={{ paddingTop: "130px", overflow: "visible" }}
    >
      <div className="gradiente"></div>
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* HERO TEXT */}
          <div className="col-md-7 col-lg-6">
            <div className="hero-1-txt white-color wow fadeInRight">
              {/* Title */}
              <h2 className="h2-md" style={{ fontSize: "2.8rem" }}>
                Los recuerdos se olvidan,
                <br /> la música no.
              </h2>
              {/* Text */}
              <p className="p-xl">
                Desarrollamos una aplicación basada en la escucha de música
                personalizada.
              </p>
              {/* Buttons Group */}
              <div className="btns-group mb-20">
                <a
                  href="#content-2"
                  className="btn btn-white tra-white-hover mr-25"
                >
                  Leer más
                </a>
                <VideoWithBtn onReproducirVideo={onReproducirVideo} />
              </div>
            </div>
          </div>
          {/* END HERO TEXT */}
          {/* HERO IMAGE */}
          <div
            className="col-md-5 col-lg-6"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <div className="hero-1-img wow fadeInLeft" style={{ width: "75%" }}>
              <img
                className="img-fluid"
                src="/images/features_img.webp"
                alt="hero-image"
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

export default Demo1Hero1;