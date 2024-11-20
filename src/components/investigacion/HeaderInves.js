import Link from "next/link";
import { useEffect, useState } from "react";
import { scroll } from "../../utils/utils";

const Header = ({
  navLight,
  whiteLogo,
  btnCustomHover,
  navHoverColor,
  singlePage,
}) => {
  useEffect(() => {
    window.addEventListener("scroll", scroll);
  }, []);

  const [toggle, setToggle] = useState(false);
  const [mobileMenuToggle, setMobileMenuToggle] = useState("");

  const toggleFun = () => {
    setToggle(!toggle);
    document.querySelector("body").classList.toggle("wsactive");
  };
  const toggleMenu = (value) => {
    setMobileMenuToggle(mobileMenuToggle !== value ? value : "");
  };

  return (
    <header
      id="header"
      className={`header tra-menu ${navLight ? "navbar-light" : "navbar-dark"}`}
    >
      <div className="header-wrapper">
        {/* MOBILE HEADER */}
        <div
          className="wsmobileheader clearfix"
          style={{ backgroundColor: "transparent" }}
        >
          <span className="smllogo">
            <a href="#">
              <img src="/ethhar_images/logo_iso.png" alt="mobile-logo" />
            </a>
          </span>
          <a
            id="wsnavtoggle"
            onClick={() => toggleFun()}
            className="wsanimated-arrow"
          >
            <span />
          </a>
        </div>
        {/* NAVIGATION MENU */}
        <div className="wsmainfull header-inves menu clearfix">
          <div className="wsmainwp clearfix">
            {/* HEADER LOGO */}
            <div className="desktoplogo">
              <a href="/" className="logo-black">
                <img
                  src="/ethhar_images/logo_iso_azul.png"
                  alt="header-logo"
                  style={{ width: "190px" }}
                />
              </a>
            </div>
            <div className="desktoplogo">
              <a href="/" className="logo-white">
                <img
                  src="/ethhar_images/logo_iso_azul.png"
                  alt="header-logo"
                  style={{ width: "190px" }}
                />
              </a>
            </div>
            <div className="desktoplogo">
              <img
                src="/ethhar_images/logo_bajada_azul.png"
                alt="header-logo"
                style={{ height: "35px", marginLeft: "10px" }}
              />
            </div>
            {/* MAIN MENU */}
            <nav className="wsmenu wsmenu-inves clearfix">
              <div className="overlapblackbg" onClick={() => toggleFun()} />

              <ul
                className={`wsmenu-list ${
                  navHoverColor ? navHoverColor : "nav-skyblue-hover"
                }`}
              >
                {/* DROPDOWN MENU */}
                <li>
                  <span
                    className={`wsmenu-click  ${
                      mobileMenuToggle === "about" ? "ws-activearrow" : ""
                    }`}
                    onClick={() => toggleMenu("about")}
                  >
                    <i className="wsmenu-arrow" />
                  </span>
                  <Link href="/" className="button-header-inves">
                    App {!singlePage && <span className="wsarrow" />}
                  </Link>
                  {!singlePage && (
                    <ul
                      className="sub-menu"
                      style={{
                        display: mobileMenuToggle === "about" ? "block" : "",
                      }}
                    >
                      <li>
                        <a href="/#beneficios">Beneficios</a>
                      </li>
                      <li>
                        <a href="/#features">Cómo funciona</a>
                      </li>
                    </ul>
                  )}
                </li>
                {/* DROPDOWN MENU */}
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple">
                  <a className="button-header-inves" href="/#equipo">
                    Equipo
                  </a>
                </li>
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple">
                  <a className="button-header-inves" href="/#pricing-2">
                    Planes
                  </a>
                </li>
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple">
                  <a className="button-header-inves" href="#">
                    Investigación
                  </a>
                </li>
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple">
                  <a className="button-header-inves" href="/prensa">
                    Prensa
                  </a>
                </li>
                {/* HEADER BUTTON */}
                <li className="nl-simple">
                  <a
                    href="/#contact-form"
                    className="custom-nav-button-inves last-link"
                    id="button-nav-important"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
