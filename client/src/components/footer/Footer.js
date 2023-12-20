import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="container-fluid" id="footer">
      <div class="row">
        <div class="col-lg-6 col-md-4">
          <div id="footerCard">
            <h4>About</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-4">
          <div id="footerCard">
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-4">
          <div id="footerCard">
            <h4>Related Links</h4>
            <p>Please subscribe to newsletter</p>
            <p>
              Lorem Ipsum passages, and more recently with desktop publishing
              software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
            <div id="footerCardNews">
              {" "}
              <input type="email" />
              <button>subscribe</button>
            </div>
            <div id="socials">
              <i class="bx bxl-facebook-circle"></i>
              <i class="bx bxl-instagram"></i>
              <i class="bx bxl-whatsapp"></i>
            </div>
          </div>
        </div>
      </div>
      <div id="footerRight">
        <p>&copy;BuagoPula Properties 2024 <br></br><small>Designed & Developed by <a href="#">CHIMBO</a></small></p>
        {/* <small>Designed & Developed by <a href="#">CHIMBO</a></small> */}
      </div>
    </div>
  );
}

export default Footer;
