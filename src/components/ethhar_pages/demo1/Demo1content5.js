const Demo1content5 = () => {
  return (
    <section
      id="content-5"
      className="content-5 ws-wrapper content-section division"
      style={{ paddingTop: "100px" }}
    >
      <div className="container">
        <div
          className="content-5-wrapper"
          style={{
            paddingTop: "1.5em",
            paddingBottom: "1.5em",
            backgroundColor: "#1c3163",
          }}
        >
          <div className="row d-flex align-items-center">
            {/* TEXT BLOCK */}
            <div
              className="col-md-7 col-lg-6"
              style={{
                height: "600px",
                overflow: "scroll",
                overflowX: "hidden",
              }}
              id="vertical-scroll-bar"
            >
              <div className="txt-block left-column wow fadeInRight">
                {/* CONTENT BOX #1 */}
                <div className="cbox mb-40">
                  {/* Icon */}
                  <div className="cbox-ico">
                    <div className="ico-45">
                      <img
                        className="img-fluid"
                        src="/images/icon_music.png"
                        alt="quotes"
                      />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="cbox-txt">
                    <h5 className="h5-md" style={{ fontWeight: "700" }}>
                      Música que se ajusta a cada situación
                    </h5>
                    <p className="p-lg">
                      Ethhar presenta la posibilidad de seleccionar listas
                      musicales que se adecúen a las actividades y estados de
                      ánimos de los pacientes. Playlists de Calma, Energía y
                      Memoria.
                    </p>
                  </div>
                </div>
                {/* CONTENT BOX #2 */}
                <div className="cbox mb-40">
                  {/* Icon */}
                  <div className="cbox-ico">
                    <div className="orange-red-color ico-45">
                      <img
                        className="img-fluid"
                        src="/images/icon_list.png"
                        alt="quotes"
                      />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="cbox-txt">
                    <h5 className="h5-md" style={{ fontWeight: "700" }}>
                      Listas de reproducción actualizadas diariamente
                    </h5>
                    <p className="p-lg">
                      De manera de mantener la eficacia en los resultados y la
                      frescura en la escucha activa de música, nuestro algoritmo
                      genera listas nuevas cada 24 horas.
                    </p>
                  </div>
                </div>
                {/* CONTENT BOX #3 */}
                <div className="cbox mb-40">
                  {/* Icon */}
                  <div className="cbox-ico">
                    <div className="white-color ico-45">
                      <span className="flaticon-trash" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="cbox-txt">
                    <h5 className="h5-md" style={{ fontWeight: "700" }}>
                      Eliminación de canciones no deseadas
                    </h5>
                    <p className="p-lg">
                      Si una canción no surte los efectos deseados, puedes
                      eliminarla con un simple clic para adaptar la lista a tus
                      preferencias y resultados.
                    </p>
                  </div>
                </div>
                {/* CONTENT BOX #4 */}
                <div className="cbox mb-40">
                  {/* Icon */}
                  <div className="cbox-ico">
                    <div className="white-color ico-45">
                      <span className="flaticon-user" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="cbox-txt">
                    <h5 className="h5-md" style={{ fontWeight: "700" }}>
                      Perfiles individuales vinculados a cada usuario
                    </h5>
                    <p className="p-lg">
                      Con Ethhar, cada usuario dispone de un perfil
                      personalizado, lo que garantiza un enfoque preciso y
                      efectivo.
                    </p>
                  </div>
                </div>
                {/* CONTENT BOX #5 */}
                <div className="cbox mb-40">
                  {/* Icon */}
                  <div className="cbox-ico">
                    <div className="white-color ico-45">
                      <span className="flaticon-line-graph" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="cbox-txt">
                    <h5 className="h5-md" style={{ fontWeight: "700" }}>
                      Test Tempau Semanal
                    </h5>
                    <p className="p-lg">
                      Realización del test en la App lo cual permite realizar un
                      seguimiento de los resultados con envío semanal al
                      profesional a cargo.
                    </p>
                  </div>
                </div>
                {/* CONTENT BOX #6 */}
                <div className="cbox mb-40">
                  {/* Icon */}
                  <div className="cbox-ico">
                    <div className="white-color ico-45">
                      <span className="flaticon-line-graph-1" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="cbox-txt">
                    <h5 className="h5-md" style={{ fontWeight: "700" }}>
                      Reporte Semanal del uso de la App
                    </h5>
                    <p className="p-lg">
                      Un seguimiento preciso del uso de la aplicación, con
                      informe semanal al profesional o responsable a cargo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* END TEXT BLOCK */}
            {/* IMAGE BLOCK */}
            <div className="col-md-5 col-lg-6">
              <div
                className="img-block right-column wow fadeInLeft"
                style={{
                  visibility: "visible",
                  animationName: "fadeInLeft",
                  marginTop: "50px",
                }}
              >
                <img
                  className="img-fluid"
                  src="supa/features_pic.webp"
                  alt="content-image"
                />
              </div>
            </div>
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo1content5;
