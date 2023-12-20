import React, { useState } from "react";
import './Navbar.css';
import Logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  const [activeLink, setActiveLink] = useState(null);

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <>
      <div>
        <nav class="navbar navbar-expand-lg bg-body-light">
          <div class="container-fluid">
            <div id="navLogo">
              <img src={Logo}/>
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <Link
                  class="navbar-brand"
                  to="/"
                  as={Link}
                  className={`nav-link ${
                    activeLink === "home" ? "active" : ""
                  }`}
                  onClick={() => handleNavLinkClick("home")}
                  href="#"
                >
                  Home
                </Link>
                </li>
                <li class="nav-item">
                <Link
                  class="navbar-brand"
                  to="/about"
                  as={Link}
                  className={`nav-link ${
                    activeLink === "about" ? "active" : ""
                  }`}
                  onClick={() => handleNavLinkClick("about")}
                  href="#"
                >
                  About
                </Link>
                </li>
                <li class="nav-item">
                <Link
                  class="navbar-brand"
                  to="/services"
                  as={Link}
                  className={`nav-link ${
                    activeLink === "services" ? "active" : ""
                  }`}
                  onClick={() => handleNavLinkClick("services")}
                  href="#"
                >
                  Services
                </Link>
                </li>
                <li class="nav-item">
                <Link
                  class="navbar-brand"
                  to="/projects"
                  as={Link}
                  className={`nav-link ${
                    activeLink === "projects" ? "active" : ""
                  }`}
                  onClick={() => handleNavLinkClick("projects")}
                  href="#"
                >
                  Projects
                </Link>
                </li>
                <li class="nav-item">
                <Link
                  class="navbar-brand"
                  to="/contact"
                  as={Link}
                  className={`nav-link ${
                    activeLink === "contact" ? "active" : ""
                  }`}
                  onClick={() => handleNavLinkClick("contact")}
                  href="#"
                >
                  Contact
                </Link>
                </li>
              </ul>
              <div id="navBtn">
                <div id="socialIcons">
                <i class='bx bxl-facebook-circle'></i>
                <i class='bx bxl-instagram'></i>
                <i class='bx bxl-whatsapp'></i>
                </div>
                <button>Get a Quote</button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
