import Slider from "react-slick";
import { useRef } from "react";

const Beneficios = () => {
  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section
      id="reviews-1"
      className="wide-100 reviews-section division slickmargin custom-reviews-mobile"
      style={{ paddingTop: "100px" }}
    >
      <div className="container">
        {/* TESTIMONIALS CONTENT */}
        <div className="row">
          <div className="col">
            <div className="owl-carousel owl-theme reviews-1-wrapper">
              <Slider {...settings}>
                {/* TESTIMONIAL #4 */}
                <div className="review-1">
                  <div className="container">
                    <div
                      className="row d-flex align-items-center"
                      style={{ justifyContent: "space-between" }}
                    >
                      {/* TEXT BLOCK */}
                      <div className="col-md-6 col-lg-6">
                        <div className="txt-block left-column wow fadeInRight">
                          {/* Title */}
                          <h2
                            className="h2-xs custom-mobile-title"
                            style={{ fontSize: "2.4rem", fontWeight: "700" }}
                          >
                            La música ha sido reconocida como una herramienta
                            vital para el bienestar.
                          </h2>
                          {/* Text */}
                          <p className="p-lg">
                            “Entre la enfermedad de Alzheimer, en los pacientes
                            con demencia, se ha encontrado que la música es
                            efectiva en el tratamiento del comportamiento
                            disruptivo, ansiedad, depresión, y está relacionado
                            con mejoras en la calidad de vida y la función
                            cognitiva” Daniel J, Levitin, 2011
                          </p>
                        </div>
                      </div>
                      {/* IMAGE BLOCK */}
                      <div className="col-md-6 col-lg-5">
                        <div className="img-block right-column wow fadeInLeft">
                          <img
                            className="img-fluid"
                            src="/images/slide_1_prueba.webp"
                            alt="content-image"
                          />
                        </div>
                      </div>
                    </div>
                    {/* End row */}
                  </div>
                </div>
                {/* END TESTIMONIAL #4 */}
                {/* TESTIMONIAL #4 */}
                <div className="review-1">
                  <div className="container">
                    <div
                      className="row d-flex align-items-center"
                      style={{ justifyContent: "space-between" }}
                    >
                      {/* TEXT BLOCK */}
                      <div className="col-md-6 col-lg-6">
                        <div className="txt-block left-column wow fadeInRight">
                          {/* Title */}
                          <h2
                            className="h2-xs custom-mobile-title"
                            style={{ fontSize: "2.4rem", fontWeight: "700" }}
                          >
                            El Alzheimer y la resiliencia de la Memoria.
                          </h2>
                          {/* Text */}
                          <p className="p-lg">
                            Si bien las enfermedades neurodegenerativas se
                            caracterizan por afectar la identidad de quien las
                            padecen, hay algo que permanece intacto en la
                            memoria y que se asocia directamente a los
                            recuerdos; la musica. Nuestro trabajo es evocar
                            recuerdos para recuperar/reconstruir la identidad.
                          </p>
                        </div>
                      </div>
                      {/* IMAGE BLOCK */}
                      <div className="col-md-6 col-lg-5">
                        <div className="img-block right-column wow fadeInLeft">
                          <img
                            className="img-fluid"
                            src="/images/slide_2_prueba.webp"
                            alt="content-image"
                          />
                        </div>
                      </div>
                    </div>
                    {/* End row */}
                  </div>
                </div>
                {/* END TESTIMONIAL #4 */}
                {/* TESTIMONIAL #4 */}
                <div className="review-1">
                  <div className="container">
                    <div
                      className="row d-flex align-items-center"
                      style={{ justifyContent: "space-between" }}
                    >
                      {/* TEXT BLOCK */}
                      <div className="col-md-6 col-lg-6">
                        <div className="txt-block left-column wow fadeInRight">
                          {/* Title */}
                          <h2
                            className="h2-xs custom-mobile-title"
                            style={{ fontSize: "2.4rem", fontWeight: "700" }}
                          >
                            Transformando desafíos en oportunidades.
                          </h2>
                          {/* Text */}
                          <p className="p-lg">
                            Con nuestra plataforma, cada día es una nueva
                            posibilidad para mejorar la vida de quienes
                            enfrentan enfermedades neurodegenerativas. Una
                            herramienta con la que también cuentan familiares y
                            cuidadores para facilitar las tareas cotidianas y
                            como entretenimiento para los tiempos sin
                            actividades.
                          </p>
                        </div>
                      </div>
                      {/* IMAGE BLOCK */}
                      <div className="col-md-6 col-lg-5">
                        <div className="img-block right-column wow fadeInLeft">
                          <img
                            className="img-fluid"
                            src="/images/slide_3_prueba.webp"
                            alt="content-image"
                          />
                        </div>
                      </div>
                    </div>
                    {/* End row */}
                  </div>
                </div>
                {/* END TESTIMONIAL #4 */}
              </Slider>
            </div>
          </div>
        </div>
        {/* END TESTIMONIALS CONTENT */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Beneficios;
