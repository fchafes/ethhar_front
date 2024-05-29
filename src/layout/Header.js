import Link from "next/link";
import { useEffect, useState } from "react";
import { scroll } from "../utils/utils";

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
              <img src="/supa/logo_iso.png" alt="mobile-logo" />
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
        <div className="wsmainfull menu clearfix">
          <div className="wsmainwp clearfix">
            {/* HEADER LOGO */}
            <div className="desktoplogo">
              <a href="/" className="logo-black">
                <img
                  src="/supa/logo_iso.png"
                  alt="header-logo"
                  style={{ width: "190px" }}
                />
              </a>
            </div>
            <div className="desktoplogo">
              <a href="/" className="logo-white">
                <img
                  src="/supa/logo_iso.png"
                  alt="header-logo"
                  style={{ width: "190px" }}
                />
              </a>
            </div>
            <div className="desktoplogo">
              <img
                src="/supa/logo_bajada.png"
                alt="header-logo"
                style={{ height: "35px", marginLeft: "10px" }}
              />
            </div>
            {/* MAIN MENU */}
            <nav className="wsmenu clearfix">
              <div className="overlapblackbg" onClick={() => toggleFun()} />

              <ul
                className={`wsmenu-list ${
                  navHoverColor ? navHoverColor : "nav-skyblue-hover"
                }`}
              >
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple">
                  <a href="#reviews-1">Beneficios</a>
                </li>
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple">
                  <a href="#content-5">Cómo funciona</a>
                </li>
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple">
                  
                  <a href="#equipo">Quiénes somos</a>
                </li>
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple">
                  <a href="#pricing-2">Planes</a>
                </li>
                {/* HEADER BUTTON */}
                <li className="nl-simple">
                  <a
                    href="#contact-form"
                    className="custom-nav-button last-link"
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
