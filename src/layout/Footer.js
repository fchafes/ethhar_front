const Footer = () => {
  return (
    <footer id="footer-1" className="footer division">
      <div className="container">
        <div
          className="row"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="col-lg-4">
            <div className="footer-info">
              <img
                className="mb-25"
                src="/supa/logo_footer.png"
                alt="footer-logo"
                style={{ width: "200px" }}
              />
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="footer-links mb-40">
              <ul
                className="foo-links text-secondary clearfix"
                style={{ textAlign: "end" }}
              >
                <li>
                  <p className="p-md">
                    <a href="#reviews-1" className="footer-links-custom">Beneficios</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="#content-5" className="footer-links-custom">Cómo funciona</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="#equipo" className="footer-links-custom">Quiénes somos</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="#pricing-2" className="footer-links-custom">Planes</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="#contact-form" className="footer-links-custom">Contacto</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr style={{ marginTop: 0 }} />
        <div className="bottom-footer">
          <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center">
            <div className="col">
              <div className="footer-copyright">
                <p>
                  © 2023 - {new Date().getFullYear()} ETHHAR. Todos los derechos
                  reservados
                </p>
              </div>
            </div>
            <div className="col">
              <ul className="bottom-footer-list text-secondary text-end">
                <li className="first-li">
                  <p>
                    <a href="#">Facebook</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#">Instagram</a>
                  </p>
                </li>
                <li className="last-li">
                  <p>
                    <a href="#">LinkedIn</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;