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
        <div className="wsmobileheader clearfix">
          <span className="smllogo">
            <img src="/images/logo-01.png" alt="mobile-logo" />
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
              <a href="#hero-1" className="logo-black">
                <img
                  src="/supa/logo_nav.png"
                  alt="header-logo"
                  style={{ width: "145px" }}
                />
              </a>
            </div>
            <div className="desktoplogo">
              <a href="#hero-1" className="logo-white">
                <img
                  src={`${
                    whiteLogo ? "/supa/logo_nav.png" : "/supa/logo_nav.png"
                  }`}
                  alt="header-logo"
                  style={{ width: "145px" }}
                />
              </a>
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
                  {/* <Link href="/#reviews-1">Beneficios</Link> */}
                </li>
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple">
                  {/* <Link href="#faqs-2">Cómo funciona</Link> */}
                  <a href="#content-5">Cómo funciona</a>
                </li>
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple">
                  {/* <Link href={`${singlePage ? "/features" : "#features-8"}`}>
                    Quiénes somos
                  </Link> */}
                  <a href="#equipo">Quiénes somos</a>
                </li>
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple">
                  {/* <Link href="/pricing">Planes</Link> */}
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
                {/* <li className="nl-simple">
                  <Link
                    href={`${singlePage ? "/pricing" : "#content-4"}`}
                    className={`btn ${
                      btnCustomHover
                        ? btnCustomHover
                        : "btn-tra-white orange-red-hover"
                    } last-link`}
                    style={{ border: "1px solid #fff !important" }}
                  >
                    Contacto
                  </Link>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
