const Testimonios = () => {
  return (
    <section
      id="testimonios"
      className="content-5 ws-wrapper content-section division testimonios-custom-mobile"
      style={{ paddingTop: "100px" }}
    >
      <div
        className="container testi-cont"
        style={{ display: "flex", justifyContent: "space-between", gap: "5px" }}
      >
        <div className="bg-whitesmoke content-5-wrapper testi-box">
          <div style={{ width: "10%", padding: 0 }}>
            <img className="img-fluid" src="/images/quotes.png" alt="quotes" />
          </div>
          <div style={{ width: "80%" }}>
            <p style={{ fontSize: "0.9em", color: "white", marginBottom: 0 }}>
            "Como venía durmiendo mal se me ocurrió probar de escuchar la playlist al acostarme, cuando escuché el primer tema, pensé, ahora no me duermo más, pero fui la primer sorprendida, hace dos días que duermo mejor y más tranquila."
            </p>
          </div>
        </div>
        <div className="bg-whitesmoke content-5-wrapper testi-box">
          <div style={{ width: "10%", padding: 0 }}>
            <img className="img-fluid" src="/images/quotes.png" alt="quotes" />
          </div>
          <div style={{ width: "80%" }}>
            <p style={{ fontSize: "0.9em", color: "white", marginBottom: 0 }}>
              "Estaba teniendo unos días de mucha ansiedad por el encierro
              (pandemia). Me acordé de la playlist y al escucharla fue como un
              bálsamo, un traslado inmediato a mi juventud, lo que me generó,
              aparte de mucha emoción, calma y serenidad."
            </p>
          </div>
        </div>
        <div className="bg-whitesmoke content-5-wrapper testi-box">
          <div style={{ width: "10%", padding: 0 }}>
            <img className="img-fluid" src="/images/quotes.png" alt="quotes" />
          </div>
          <div style={{ width: "80%" }}>
            <p style={{ fontSize: "0.9em", color: "white", marginBottom: 0 }}>
              "Venía con un día de locos y me recosté un poco para ver si me calmaba, se me ocurrió escuchar la lista para descansar, al despertarme tenía una sensación de tranquilidad increíble."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
