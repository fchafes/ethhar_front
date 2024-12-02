import Slider from "react-slick";

const LogoMarqueeInves = () => {
  let setting = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      id="brands-1"
      className="wide-100 brands-section division"
      style={{ paddingTop: "0", paddingBottom: "50px" }}
    >
      <div className="container">
        <div className="row">
          <div className="col text-center">
            {/* Brands Carousel */}
            <Slider {...setting} className="owl-carousel brands-carousel">
              {/* Brand Logo Image 1*/}
              <div className="brand-logo">
                <img
                  className="img-fluid"
                  src="ethhar_images/apoyo/logos_congresos/congreso_04.png"
                  alt="brand-logo"
                />
              </div>
              {/* Brand Logo Image 2*/}
              <div className="brand-logo">
                <img
                  className="img-fluid"
                  src="ethhar_images/apoyo/logos_congresos/congreso_02.png"
                  alt="brand-logo"
                />
              </div>
              {/* Brand Logo Image 3*/}
              <div className="brand-logo">
                <img
                  className="img-fluid"
                  src="ethhar_images/apoyo/logos_congresos/congreso_03.png"
                  alt="brand-logo"
                />
              </div>
              {/* Brand Logo Image 4*/}
              <div className="brand-logo">
                <img
                  className="img-fluid"
                  src="ethhar_images/apoyo/logos_congresos/congreso_01.png"
                  alt="brand-logo"
                />
              </div>
              {/* Brand Logo Image 10*/}
              <div className="brand-logo">
                <img
                  className="img-fluid"
                  src="ethhar_images/apoyo/logos_congresos/congreso_05.png"
                  alt="brand-logo"
                />
              </div>
              
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoMarqueeInves;
