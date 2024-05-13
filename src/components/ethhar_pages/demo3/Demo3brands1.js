import Slider from "react-slick";

const Demo3brands1 = () => {
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
    <div id="brands-1" className="wide-100 brands-section division" style={{ paddingTop: "0", paddingBottom: "100px" }}>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            {/* Brands Carousel */}
            <Slider {...setting} className="owl-carousel brands-carousel">
              {/* Brand Logo Image 1*/}
              <div className="brand-logo">
                <img
                  className="img-fluid"
                  src="supa/apoyo/logos01.png"
                  alt="brand-logo"
                />
              </div>
              {/* Brand Logo Image 2*/}
              <div className="brand-logo">
                <img
                  className="img-fluid"
                  src="supa/apoyo/logos02.png"
                  alt="brand-logo"
                />
              </div>
              {/* Brand Logo Image 3*/}
              <div className="brand-logo">
                <img
                  className="img-fluid"
                  src="supa/apoyo/logos03.png"
                  alt="brand-logo"
                />
              </div>
              {/* Brand Logo Image 4*/}
              <div className="brand-logo">
                <img
                  className="img-fluid"
                  src="supa/apoyo/logos04.png"
                  alt="brand-logo"
                />
              </div>
              {/* Brand Logo Image 5*/}
              <div className="brand-logo">
                <img
                  className="img-fluid"
                  src="supa/apoyo/logos05.png"
                  alt="brand-logo"
                />
              </div>
              {/* Brand Logo Image 6*/}
              <div className="brand-logo">
                <img
                  className="img-fluid"
                  src="supa/apoyo/logos06.png"
                  alt="brand-logo"
                />
              </div>
              {/* Brand Logo Image 7*/}
              <div className="brand-logo">
                <img
                  className="img-fluid"
                  src="supa/apoyo/logos07.png"
                  alt="brand-logo"
                />
              </div>
              {/* Brand Logo Image 8*/}
              <div className="brand-logo">
                <img
                  className="img-fluid"
                  src="supa/apoyo/logos08.png"
                  alt="brand-logo"
                />
              </div>
              {/* Brand Logo Image 9*/}
              <div className="brand-logo">
                <img
                  className="img-fluid"
                  src="supa/apoyo/logos09.png"
                  alt="brand-logo"
                />
              </div>
            </Slider>
            {/* End Brands Carousel */}
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </div>
  );
};

export default Demo3brands1;
