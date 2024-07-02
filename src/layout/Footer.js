import { useState } from "react";
import TermsModal from "../components/TermsModal";

const Footer = () => {
  const [termsModal, setTermsModal] = useState(false);
  const toggleModal = () => {
    setTermsModal(!termsModal);
  };

  return (
    <>
      <footer id="footer-1" className="footer division footer-custom-mobile">
        <div className="container">
          <div
            className="row"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="col-lg-4 col-sm-6 footer-logo-col-custom-mobile">
              <div className="footer-info custom-footer-info-mobile">
                <img
                  className="mb-25 footer-logo-custom-mobile"
                  src="/supa/logo_footer.png"
                  alt="footer-logo"
                  style={{ width: "200px" }}
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-2">
              <div className="footer-links mb-40">
                <ul
                  className="foo-links text-secondary clearfix footer-links-custom-mobile"
                  style={{ textAlign: "end" }}
                >
                  <li>
                    <p className="p-md">
                      <a href="#reviews-1" className="footer-links-custom">
                        Beneficios
                      </a>
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <a href="#content-5" className="footer-links-custom">
                        Cómo funciona
                      </a>
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <a href="#equipo" className="footer-links-custom">
                        Quiénes somos
                      </a>
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <a href="#pricing-2" className="footer-links-custom">
                        Planes
                      </a>
                    </p>
                  </li>
                  <li>
                    <p className="p-md">
                      <a href="#contact-form" className="footer-links-custom">
                        Contacto
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr style={{ marginTop: 0 }} />
          <div className="bottom-footer">
            <div className="row row-cols-1 row-cols-md-2 d-flex align-items-end">
              <div className="col-md-3">
                <div className="footer-copyright">
                  <p>
                    © 2023 - {new Date().getFullYear()} ETHHAR.
                    <br /> Todos los derechos reservados.
                  </p>
                </div>
              </div>
              <div className="col-md-9">
                <ul className="bottom-footer-list text-secondary text-end">
                  {/* <li className="first-li">
                    <p>
                      <a href="#" onClick={toggleModal}>
                        Términos y condiciones
                      </a>
                    </p>
                  </li> */}
                  <li>
                    <p>Cel: (+598) 094 011 010</p>
                  </li>
                  <li>
                    <p>
                      <a href="mailto: info@ethhar.com.uy">
                        info@ethhar.com.uy
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="mailto: soporte@ethhar.com.uy">
                        soporte@ethhar.com.uy
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a
                        href="https://www.facebook.com/profile.php?id=100086571590317"
                        target="_blank"
                      >
                        Facebook
                      </a>
                    </p>
                  </li>
                  <li className="last-li">
                    <p>
                      <a
                        href="https://www.instagram.com/ethhar_/"
                        target="_blank"
                      >
                        Instagram
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* {termsModal && <TermsModal toggleModal={toggleModal} />} */}
    </>
  );
};

export default Footer;
