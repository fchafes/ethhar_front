import Slider from "react-slick";

const Team = () => {
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
      className="bg-whitesmoke-gradient wide-100 reviews-section division slickmargin cus-reviews-custom-mobile"
      style={{ paddingTop: "150px", paddingBottom: "150px" }}
    >
      <div className="container" id="equipo-cards">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title title-01 mb-70">
              {/* Title */}
              <h3
                className="h3-md custom-mobile-title"
                style={{ fontSize: "2.3em", fontWeight: "700" }}
              >
                Conoce nuestro equipo de trabajo
              </h3>
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
                            src="ethhar_images/equipo/Daniel-Fondo-Azul.jpg"
                            alt="review-avatar"
                          />
                        </div>
                        {/* Testimonial Author */}
                        <div className="review-author">
                          <h6 className="h6-xl" style={{ color: "#1d293f" }}>
                            Cr Daniel Gadea
                          </h6>
                          {/* <p className="p-md">@jose_luis</p> */}
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
                    <p
                      className="p-sx"
                      style={{ marginBottom: 0, fontSize: "15px" }}
                    >
                      Fundador de Ethhar en 2019. Trabajó como DJ en la ciudad
                      de Montevideo desde 1973 a 2002. Comenzó a estudiar la
                      relación entre la música y el cerebro en la facultad de
                      Ciencias, en los laboratorios de Neurociencias (2019) y
                      talleres de Neurociencia (Instituto Clemente Estable).
                      Magister en Musicoterapia, Universidad de La Rioja,
                      España.
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
                            src="ethhar_images/equipo/Damian-Fondo-Azul.jpg"
                            alt="review-avatar"
                          />
                        </div>
                        {/* Testimonial Author */}
                        <div className="review-author">
                          <h6 className="h6-xl" style={{ color: "#1d293f" }}>
                            Damián Gadea
                          </h6>
                          {/* <p className="p-md">@jose_luis</p> */}
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
                    <p
                      className="p-sx"
                      style={{ marginBottom: 0, fontSize: "15px" }}
                    >
                      Se incorporó a Ethhar en el año 2020, egresado de la
                      Escuela Superior de Comunicación Social y Diseño Gráfico
                      en el 2013. En la actualidad cursando materias de la Lic.
                      en Diseño y Comunicación Visual (Udelar) y
                      especializándose en la Guitarra y el Canto.
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
                            src="ethhar_images/equipo/Ventura-Fondo-Azul.jpg"
                            alt="review-avatar"
                          />
                        </div>
                        {/* Testimonial Author */}
                        <div className="review-author">
                          <h6 className="h6-xl" style={{ color: "#1d293f" }}>
                            Dr Roberto Ventura
                          </h6>
                          {/* <p className="p-md">@jose_luis</p> */}
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
                    <p
                      className="p-sx"
                      style={{ marginBottom: 0, fontSize: "15px" }}
                    >
                      Estudió neurología, neuropsicología y psiquiatría en la
                      Facultad de Medicina de la Universidad de la República,
                      también se desempeñó como profesor de dicha universidad.
                      Trabaja en la Cátedra de Neurología y Bases Biológicas del
                      Comportamiento Humano de la Facultad de Psicología.
                      Presidente y fundador de la Asociación Uruguaya de
                      Alzheimer y Similares (AUDAS)
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
                            src="ethhar_images/equipo/Fernando-Fondo-Azul.jpg"
                            alt="review-avatar"
                          />
                        </div>
                        {/* Testimonial Author */}
                        <div className="review-author">
                          <h6 className="h6-sx" style={{ color: "#1d293f" }}>
                            Dr. Fernando Taragano
                          </h6>
                        </div>
                      </div>
                      <div
                        className="review-avatar"
                        style={{ marginRight: "-20px" }}
                      >
                        <img
                          src="ethhar_images/arg_flag.jpg"
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
                    <p
                      className="p-sx"
                      style={{ marginBottom: 0, fontSize: "15px" }}
                    >
                      Doctor en Salud Mental, Summa Cum Laude, por la
                      Universidad de Buenos Aires, Médico Psiquiatra, por la
                      Universidad de Buenos Aires. Premio “Academia Nacional de
                      Medicina” otorgado por la Honorable Academia Nacional de
                      Medicina; es el Director Médico del Instituto
                      Neurogeriátrico Nuestra Señora de Las Nieves
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
                            src="ethhar_images/equipo/Viviana-Fondo-Azul.jpg"
                            alt="review-avatar"
                          />
                        </div>
                        {/* Testimonial Author */}
                        <div className="review-author">
                          <h6 className="h6-xl" style={{ color: "#1d293f" }}>
                            Lic. Viviana Sánchez
                          </h6>
                          {/* <p className="p-md">@jose_luis</p> */}
                        </div>
                      </div>
                      <div
                        className="review-avatar"
                        style={{ marginRight: "-20px" }}
                      >
                        <img
                          src="ethhar_images/arg_flag.jpg"
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
                    <p
                      className="p-sx"
                      style={{ marginBottom: 0, fontSize: "15px" }}
                    >
                      Musicoterapeuta. Coordinadora de investigación del SIREN -
                      CEMIC Docente de la Carrera de postgrado en Musicoterapia
                      de la Universidad de Buenos Aires Docente del Seminario de
                      Musicoterapia en Neuropsicología en ADIM (Asistencia,
                      Desarrollo e Investigación en Musicoterapia)
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
                            src="ethhar_images/equipo_6.jpg"
                            alt="review-avatar"
                          />
                        </div>
                        {/* Testimonial Author */}
                        <div className="review-author">
                          <h6 className="h6-xl" style={{ color: "#1d293f" }}>
                            Dr. Rafael Ramírez
                          </h6>
                          {/* <p className="p-md">@jose_luis</p> */}
                        </div>
                      </div>
                      <div
                        className="review-avatar"
                        style={{ marginRight: "-20px" }}
                      >
                        <img
                          src="ethhar_images/spain_flag.jpg"
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
                    <p
                      className="p-sx"
                      style={{ marginBottom: 0, fontSize: "15px" }}
                    >
                      Profesor y líder del Laboratorio de Música y Aprendizaje
                      Automático en La Universidad Pompeu Fabra. Licenciatura en
                      Matemáticas de la Universidad Nacional Autónoma de México,
                      Maestría en Inteligencia Artificial y Doctorado en
                      Ciencias de la Computación de la Universidad de Bristol,
                      Reino Unido, y durante 5 años fue profesor en el
                      Departamento de Ciencias de la Computación de la Escuela
                      de Informática de la Universidad Nacional de Singapur.
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
                            src="ethhar_images/equipo_7.jpg"
                            alt="review-avatar"
                          />
                        </div>
                        {/* Testimonial Author */}
                        <div className="review-author">
                          <h6 className="h6-xl" style={{ color: "#1d293f" }}>
                            Dra. Nuria Escudé
                          </h6>
                          {/* <p className="p-md">@jose_luis</p> */}
                        </div>
                      </div>
                      <div
                        className="review-avatar"
                        style={{ marginRight: "-20px" }}
                      >
                        <img
                          src="ethhar_images/spain_flag.jpg"
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
                    <p
                      className="p-sx"
                      style={{ marginBottom: 0, fontSize: "15px" }}
                    >
                      Profesora y directora del Programa de Musicoterapia de la
                      Universidad de Barcelona desde 2002. Psicóloga y profesora
                      titulada de piano. También es directora y musicoterapeuta
                      del Instituto Catalán de Musicoterapia, Miembro de la
                      Junta Directiva de la Asociación Internacional de Música y
                      Medicina.
                    </p>
                    {/* End Testimonial Author */}
                  </div>
                  {/* End Text */}
                </div>
                {/* END TESTIMONIAL #7 */}
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

export default Team;
