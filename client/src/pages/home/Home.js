import React from "react";
import "./Home.css";
import Banner01 from "../../assets/homebanner.jpeg";
import Acon from "../../assets/iconcard.png";
import Acon1 from "../../assets/Acon01.png";
import Acon2 from "../../assets/Acon02.png";
import Banner02 from "../../assets/about.jpg";
import Banner03 from "../../assets/construction.jpg";
import Vision from "../../assets/vision.jpeg";
import Footer from "../../components/footer/Footer";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <div id="reviewCard01">
      <div id="reviewCardInner">
        <h1>Infrastructure Building</h1>
        <h3>
          Witness the Evolution of Structures. Crafted for Strength and
          Innovation
        </h3>

        <button
          onClick={() => {
            navigate("/projects");
          }}
        >
          Our Work
        </button>
      </div>
    </div>,
    <div id="reviewCard02">
      <div id="reviewCardInner">
        <h1>Quantity Surveyor</h1>
        <h3>
          Navigating Precise Project Estimates and Management. Your Gateway to
          Optimized Costs.
        </h3>

        <button
          onClick={() => {
            navigate("/projects");
          }}
        >
          Our Work
        </button>
      </div>
    </div>,
    <div id="reviewCard03">
      <div id="reviewCardInner">
        <h1>Civil Engineering</h1>
        <h3>
          Unveiling the Art of Urban Development. Where Vision Meets
          Unparalleled Expertise
        </h3>

        <button
          onClick={() => {
            navigate("/projects");
          }}
        >
          Our Work
        </button>
      </div>
    </div>,
  ];
  const responsive = {
    0: { items: 1 },
    1024: { items: 1 },
  };
  return (
    <>
      <div>
        <AliceCarousel
          mouseTracking
          items={items}
          autoPlay
          disableButtonsControls={true}
          disableDotsControls={true}
          infinite={true}
          autoPlayInterval={5000}
          responsive={responsive}
          animationType="fadeout"
        />
      </div>
      <div className="container" id="visionBox">
        <h2>What We Do</h2>
        <div class="row">
          <div class="col-lg-4 col-md-4">
            <div id="visionCard">
              <img src={Acon2} />
              <h5>Infrusture Construction</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="visionCard">
              <img src={Acon1} />
              <h5>Civil Engineering</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="visionCard">
              <img src={Acon} />
              <h5>Quantity Survery</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container" id="workList">
        <h2>No Work Is Too Small Or Too Big For Us</h2>
        <div class="row" id="workListBox">
          <div class="col-lg-3 col-md-4">
            <div id="workListBoxCard">
              <h5>Pre-Construction Services</h5>
              <ul>
                <li>Site clearance</li>
                <li>Brick laying</li>
                <li>Paving</li>
                <li>Flooring</li>
                <li>Draining</li>
                <li>Plumbing</li>
                <li>Electrical Wiring</li>
                <li>Draining</li>
                <li>Plumbing</li>
                <li>Electrical Wiring</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div id="workListBoxCard">
              <h5>Construction Services</h5>
              <ul>
                <li>Site clearance</li>
                <li>Brick laying</li>
                <li>Paving</li>
                <li>Flooring</li>
                <li>Draining</li>
                <li>Plumbing</li>
                <li>Electrical Wiring</li>
                <li>Draining</li>
                <li>Plumbing</li>
                <li>Electrical Wiring</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div id="workListBoxCard">
              <h5>Residential Constructions</h5>
              <ul>
                <li>Site clearance</li>
                <li>Brick laying</li>
                <li>Paving</li>
                <li>Flooring</li>
                <li>Draining</li>
                <li>Plumbing</li>
                <li>Electrical Wiring</li>
                <li>Draining</li>
                <li>Plumbing</li>
                <li>Electrical Wiring</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div id="workListBoxCard">
              <h5>Commercial Construction</h5>
              <ul>
                <li>Site clearance</li>
                <li>Brick laying</li>
                <li>Paving</li>
                <li>Flooring</li>
                <li>Draining</li>
                <li>Plumbing</li>
                <li>Electrical Wiring</li>
                <li>Draining</li>
                <li>Plumbing</li>
                <li>Electrical Wiring</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container" id="ourVisionWrap">
        <div class="row">
          <div class="col-lg-6 col-md-4">
            <div id="ourVisionCard">
              <h2>Our Vision</h2>
              <h4>
                "Our vision is to redefine the construction landscape by
                delivering innovative solutions, fostering sustainable
                development, and creating iconic structures that stand as
                testaments to quality, safety, and excellence".{" "}
                {/* We aspire to be the cornerstone of reliability,
                forging a path where precision meets passion, and where every
                project undertaken reflects our commitment to craftsmanship,
                integrity, and client satisfaction." */}
              </h4>
              <p>
                W Mushambi ~
                <span>
                  <i>Managing Director- 2010</i>
                </span>
              </p>
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div id="ourVisionCard">
              <img src={Vision} class="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </div>
      <div className="container" id="getInTouch">
        <div class="row">
          <div class="col-lg-8 col-md-4">
            <form class="row g-3" id="getIntouchForm">
              <h2>Get In Touch</h2>
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
                  Message
                </label>
                <textarea class="form-control" id="inputAddress" />
              </div>

              <div class="col-12">
                <button type="submit">send</button>
              </div>
            </form>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="getIntouchFormBox">
              <div id="getIntouchFormBoxCard">
                <i class="bx bx-map"></i>
                <p>
                  123 Mars Street<br></br>Harare<br></br>Zimbabwe
                </p>
              </div>
              <div id="getIntouchFormBoxCard">
                <i class="bx bx-envelope"></i>
                <p>
                  buagopula@gmail.com<br></br>buagopula@support.com<br></br>
                  infor@buagopula.com
                </p>
              </div>
              <div id="getIntouchFormBoxCard">
                <i class="bx bx-phone"></i>
                <p>
                  +263 772 122 3345<br></br>+263 772 122 3345<br></br>+263 772
                  122 3345
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
