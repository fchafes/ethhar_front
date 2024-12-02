import { useRef, useEffect } from "react";

const BigVideo = ({ reproducir }) => {
  const videoRef = useRef(null);
  const iframeRef = useRef(null);
  useEffect(() => {
    if (reproducir && iframeRef.current) {
      const srcWithAutoplay = iframeRef.current.src + "&autoplay=1";
      iframeRef.current.src = srcWithAutoplay;
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
            <div
              className="video-preview wow fadeInUp"
              style={{ height: "80vh" }}
            >
              <iframe
                ref={iframeRef}
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Q6-bt9XhOjc?si=pxcEsZuDn6BE3xSf"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-9">
            <div
              className="section-title title-02 mb-60 custom-mobile-vid-sec"
              style={{ marginTop: "50px" }}
            >
              <h3 className="h2-xs h3-custom-resp">
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

export default BigVideo;
