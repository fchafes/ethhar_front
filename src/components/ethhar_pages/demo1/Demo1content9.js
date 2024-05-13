import { useRef, useEffect } from "react";

const Demo1content9 = ({ reproducir }) => {
  const videoRef = useRef(null);
  useEffect(() => {
    if (reproducir) {
      videoRef.current.play();
    }
  }, [reproducir]);

  return (
    <section
      id="content-9"
      className="content-9 bg-01 pt-100 content-section division mb-3"
    >
      <div className="container white-color">
        {/* IMAGE BLOCK */}
        <div className="row">
          <div className="col">
            <div className="content-9-img video-preview wow fadeInUp">
              {/* <VideoImage /> */}
              <video ref={videoRef} controls poster="/supa/video-promo-poster.jpg" className="video-promo-custom">
                <source src="supa/comprimido.mp4" type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
              </video>
            </div>
          </div>
        </div>
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-9">
            <div
              className="section-title title-02 mb-60"
              style={{ marginTop: "150px" }}
            >
              <h3 className="h2-xs">
                Intervenciones musicales personalizadas enfocadas en personas de
                tercera edad, principalmente en aquellas diagnosticadas con
                enfermedades neurodegenerativas, como el Alzheimer.
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo1content9;
