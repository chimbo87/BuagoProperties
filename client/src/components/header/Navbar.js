import React, { useState } from "react";
import "./Navbar.css";
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
              <img src={Logo} />
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
                  <i class="bx bxl-facebook-circle"></i>
                  <i class="bx bxl-instagram"></i>
                  <i class="bx bxl-whatsapp"></i>
                </div>
                <button data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Get Free Quotation
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form class="row g-3">
                <div class="col-md-6">
                  <label for="inputEmail4" class="form-label">
                    Name
                  </label>
                  <input type="text" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">
                    Surname
                  </label>
                  <input type="text" class="form-control" id="inputPassword4" />
                </div>
                <div class="col-12">
                  <label for="inputAddress" class="form-label">
                    Email
                  </label>
                  <input type="email" class="form-control" id="inputAddress" />
                </div>
                <div class="col-12">
                  <label for="inputAddress" class="form-label">
                    Category
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>

                <div class="col-12">
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      Message
                    </label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
                <div class="col-12" id="contactFormBtn">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              {/* <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
