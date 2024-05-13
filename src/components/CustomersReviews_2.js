import Slider from "react-slick";

const CustomersReviews_2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoPlay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <section
      // id="reviews-1"
      id="equipo"
      className="bg-whitesmoke-gradient wide-100 reviews-section division slickmargin"
      style={{ paddingTop: "150px", paddingBottom: "150px" }}
    >
      <div className="container" id="equipo-cards">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title title-01 mb-70">
              {/* Title */}
              <h3 className="h3-md">Conoce nuestro equipo de trabajo</h3>
            </div>
          </div>
        </div>
        {/* TESTIMONIALS CONTENT */}
        <div className="row">
          <div className="col">
            <div className="owl-carousel owl-theme reviews-1-wrapper">
              <Slider {...settings}>
                {/* TESTIMONIAL #1 */}
                <div className="review-44">
                  {/* Text */}
                  <div className="review-1-txt">
                    {/* Text */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {/* Testimonial Author */}
                      <div
                        className="author-data clearfix"
                        style={{ marginTop: 0, marginBottom: "1em" }}
                      >
                        {/* Testimonial Avatar */}
                        <div className="review-avatar">
                          <img
                            src="/images/review-author-1.jpg"
                            alt="review-avatar"
                          />
                        </div>
                        {/* Testimonial Author */}
                        <div className="review-author">
                          <h6 className="h6-xl" style={{ color: "#1d293f" }}>
                            Jose Luis
                          </h6>
                          <p className="p-md">@jose_luis</p>
                        </div>
                      </div>
                      <div
                        className="review-avatar"
                        style={{ marginRight: "-20px" }}
                      >
                        <img
                          src="/images/uru_flag.png"
                          alt="review-avatar"
                          style={{
                            width: "30px",
                            height: "17.5px",
                            objectFit: "contain",
                            borderRadius: "5px",
                          }}
                        />
                      </div>
                    </div>
                    <p className="p-lg" style={{ marginBottom: 0 }}>
                      Etiam sapien sagittis congue augue massa varius egestas
                      ultrice varius magna a tempus aliquet undo cursus suscipit
                    </p>
                    {/* End Testimonial Author */}
                  </div>
                  {/* End Text */}
                </div>
                {/* END TESTIMONIAL #1 */}
                {/* TESTIMONIAL #2 */}
                <div className="review-44">
                  {/* Text */}
                  <div className="review-1-txt">
                    {/* Text */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {/* Testimonial Author */}
                      <div
                        className="author-data clearfix"
                        style={{ marginTop: 0, marginBottom: "1em" }}
                      >
                        {/* Testimonial Avatar */}
                        <div className="review-avatar">
                          <img
                            src="/images/review-author-1.jpg"
                            alt="review-avatar"
                          />
                        </div>
                        {/* Testimonial Author */}
                        <div className="review-author">
                          <h6 className="h6-xl" style={{ color: "#1d293f" }}>
                            Jose Luis
                          </h6>
                          <p className="p-md">@jose_luis</p>
                        </div>
                      </div>
                      <div
                        className="review-avatar"
                        style={{ marginRight: "-20px" }}
                      >
                        <img
                          src="/images/uru_flag.png"
                          alt="review-avatar"
                          style={{
                            width: "30px",
                            height: "17.5px",
                            objectFit: "contain",
                            borderRadius: "5px",
                          }}
                        />
                      </div>
                    </div>
                    <p className="p-lg" style={{ marginBottom: 0 }}>
                      Etiam sapien sagittis congue augue massa varius egestas
                      ultrice varius magna a tempus aliquet undo cursus suscipit
                    </p>
                    {/* End Testimonial Author */}
                  </div>
                  {/* End Text */}
                </div>
                {/* END TESTIMONIAL #2 */}
                {/* TESTIMONIAL #3 */}
                <div className="review-44">
                  {/* Text */}
                  <div className="review-1-txt">
                    {/* Text */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {/* Testimonial Author */}
                      <div
                        className="author-data clearfix"
                        style={{ marginTop: 0, marginBottom: "1em" }}
                      >
                        {/* Testimonial Avatar */}
                        <div className="review-avatar">
                          <img
                            src="/images/review-author-1.jpg"
                            alt="review-avatar"
                          />
                        </div>
                        {/* Testimonial Author */}
                        <div className="review-author">
                          <h6 className="h6-xl" style={{ color: "#1d293f" }}>
                            Jose Luis
                          </h6>
                          <p className="p-md">@jose_luis</p>
                        </div>
                      </div>
                      <div
                        className="review-avatar"
                        style={{ marginRight: "-20px" }}
                      >
                        <img
                          src="/images/uru_flag.png"
                          alt="review-avatar"
                          style={{
                            width: "30px",
                            height: "17.5px",
                            objectFit: "contain",
                            borderRadius: "5px",
                          }}
                        />
                      </div>
                    </div>
                    <p className="p-lg" style={{ marginBottom: 0 }}>
                      Etiam sapien sagittis congue augue massa varius egestas
                      ultrice varius magna a tempus aliquet undo cursus suscipit
                    </p>
                    {/* End Testimonial Author */}
                  </div>
                  {/* End Text */}
                </div>
                {/* END TESTIMONIAL #3 */}
                {/* TESTIMONIAL #4 */}
                <div className="review-44">
                  {/* Text */}
                  <div className="review-1-txt">
                    {/* Text */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {/* Testimonial Author */}
                      <div
                        className="author-data clearfix"
                        style={{ marginTop: 0, marginBottom: "1em" }}
                      >
                        {/* Testimonial Avatar */}
                        <div className="review-avatar">
                          <img
                            src="/images/review-author-1.jpg"
                            alt="review-avatar"
                          />
                        </div>
                        {/* Testimonial Author */}
                        <div className="review-author">
                          <h6 className="h6-xl" style={{ color: "#1d293f" }}>
                            Jose Luis
                          </h6>
                          <p className="p-md">@jose_luis</p>
                        </div>
                      </div>
                      <div
                        className="review-avatar"
                        style={{ marginRight: "-20px" }}
                      >
                        <img
                          src="/images/uru_flag.png"
                          alt="review-avatar"
                          style={{
                            width: "30px",
                            height: "17.5px",
                            objectFit: "contain",
                            borderRadius: "5px",
                          }}
                        />
                      </div>
                    </div>
                    <p className="p-lg" style={{ marginBottom: 0 }}>
                      Etiam sapien sagittis congue augue massa varius egestas
                      ultrice varius magna a tempus aliquet undo cursus suscipit
                    </p>
                    {/* End Testimonial Author */}
                  </div>
                  {/* End Text */}
                </div>
                {/* END TESTIMONIAL #4 */}
                {/* TESTIMONIAL #5 */}
                <div className="review-44">
                  {/* Text */}
                  <div className="review-1-txt">
                    {/* Text */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {/* Testimonial Author */}
                      <div
                        className="author-data clearfix"
                        style={{ marginTop: 0, marginBottom: "1em" }}
                      >
                        {/* Testimonial Avatar */}
                        <div className="review-avatar">
                          <img
                            src="/images/review-author-1.jpg"
                            alt="review-avatar"
                          />
                        </div>
                        {/* Testimonial Author */}
                        <div className="review-author">
                          <h6 className="h6-xl" style={{ color: "#1d293f" }}>
                            Jose Luis
                          </h6>
                          <p className="p-md">@jose_luis</p>
                        </div>
                      </div>
                      <div
                        className="review-avatar"
                        style={{ marginRight: "-20px" }}
                      >
                        <img
                          src="/images/uru_flag.png"
                          alt="review-avatar"
                          style={{
                            width: "30px",
                            height: "17.5px",
                            objectFit: "contain",
                            borderRadius: "5px",
                          }}
                        />
                      </div>
                    </div>
                    <p className="p-lg" style={{ marginBottom: 0 }}>
                      Etiam sapien sagittis congue augue massa varius egestas
                      ultrice varius magna a tempus aliquet undo cursus suscipit
                    </p>
                    {/* End Testimonial Author */}
                  </div>
                  {/* End Text */}
                </div>
                {/* END TESTIMONIAL #5 */}
                {/* TESTIMONIAL #6 */}
                <div className="review-44">
                  {/* Text */}
                  <div className="review-1-txt">
                    {/* Text */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {/* Testimonial Author */}
                      <div
                        className="author-data clearfix"
                        style={{ marginTop: 0, marginBottom: "1em" }}
                      >
                        {/* Testimonial Avatar */}
                        <div className="review-avatar">
                          <img
                            src="/images/review-author-1.jpg"
                            alt="review-avatar"
                          />
                        </div>
                        {/* Testimonial Author */}
                        <div className="review-author">
                          <h6 className="h6-xl" style={{ color: "#1d293f" }}>
                            Jose Luis
                          </h6>
                          <p className="p-md">@jose_luis</p>
                        </div>
                      </div>
                      <div
                        className="review-avatar"
                        style={{ marginRight: "-20px" }}
                      >
                        <img
                          src="/images/uru_flag.png"
                          alt="review-avatar"
                          style={{
                            width: "30px",
                            height: "17.5px",
                            objectFit: "contain",
                            borderRadius: "5px",
                          }}
                        />
                      </div>
                    </div>
                    <p className="p-lg" style={{ marginBottom: 0 }}>
                      Etiam sapien sagittis congue augue massa varius egestas
                      ultrice varius magna a tempus aliquet undo cursus suscipit
                    </p>
                    {/* End Testimonial Author */}
                  </div>
                  {/* End Text */}
                </div>
                {/* END TESTIMONIAL #6 */}
                {/* TESTIMONIAL #7 */}
                <div className="review-44">
                  {/* Text */}
                  <div className="review-1-txt">
                    {/* Text */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {/* Testimonial Author */}
                      <div
                        className="author-data clearfix"
                        style={{ marginTop: 0, marginBottom: "1em" }}
                      >
                        {/* Testimonial Avatar */}
                        <div className="review-avatar">
                          <img
                            src="/images/review-author-1.jpg"
                            alt="review-avatar"
                          />
                        </div>
                        {/* Testimonial Author */}
                        <div className="review-author">
                          <h6 className="h6-xl" style={{ color: "#1d293f" }}>
                            Jose Luis
                          </h6>
                          <p className="p-md">@jose_luis</p>
                        </div>
                      </div>
                      <div
                        className="review-avatar"
                        style={{ marginRight: "-20px" }}
                      >
                        <img
                          src="/images/uru_flag.png"
                          alt="review-avatar"
                          style={{
                            width: "30px",
                            height: "17.5px",
                            objectFit: "contain",
                            borderRadius: "5px",
                          }}
                        />
                      </div>
                    </div>
                    <p className="p-lg" style={{ marginBottom: 0 }}>
                      Etiam sapien sagittis congue augue massa varius egestas
                      ultrice varius magna a tempus aliquet undo cursus suscipit
                    </p>
                    {/* End Testimonial Author */}
                  </div>
                  {/* End Text */}
                </div>
                {/* END TESTIMONIAL #7 */}
                {/* TESTIMONIAL #8 */}
                <div className="review-44">
                  {/* Text */}
                  <div className="review-1-txt">
                    {/* Text */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {/* Testimonial Author */}
                      <div
                        className="author-data clearfix"
                        style={{ marginTop: 0, marginBottom: "1em" }}
                      >
                        {/* Testimonial Avatar */}
                        <div className="review-avatar">
                          <img
                            src="/images/review-author-1.jpg"
                            alt="review-avatar"
                          />
                        </div>
                        {/* Testimonial Author */}
                        <div className="review-author">
                          <h6 className="h6-xl" style={{ color: "#1d293f" }}>
                            Jose Luis
                          </h6>
                          <p className="p-md">@jose_luis</p>
                        </div>
                      </div>
                      <div
                        className="review-avatar"
                        style={{ marginRight: "-20px" }}
                      >
                        <img
                          src="/images/uru_flag.png"
                          alt="review-avatar"
                          style={{
                            width: "30px",
                            height: "17.5px",
                            objectFit: "contain",
                            borderRadius: "5px",
                          }}
                        />
                      </div>
                    </div>
                    <p className="p-lg" style={{ marginBottom: 0 }}>
                      Etiam sapien sagittis congue augue massa varius egestas
                      ultrice varius magna a tempus aliquet undo cursus suscipit
                    </p>
                    {/* End Testimonial Author */}
                  </div>
                  {/* End Text */}
                </div>
                {/* END TESTIMONIAL #8 */}
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

export default CustomersReviews_2;
