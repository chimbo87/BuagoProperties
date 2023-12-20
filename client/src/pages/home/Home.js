import React from "react";
import "./Home.css";
import Banner01 from "../../assets/homebanner.jpeg";
import Banner02 from "../../assets/about.jpg";
import Banner03 from "../../assets/construction.jpg";
import Vision from "../../assets/vision.jpeg";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <>
      <div className="container-fluid">
        <div id="carouselExampleCaptions" class="carousel slide">
          <div>
            {/* <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button> */}
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" id="homeBanner">
              <img src={Banner02} class="d-block w-100" alt="..." />
              <div class="carousel-caption  d-md-block">
                <h1>
                  Commited To Effective And<br></br>Superior{" "}
                  <span>Quality </span> Results
                </h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
                <button>Explore</button>
              </div>
            </div>
            <div class="carousel-item" id="homeBanner">
              <img src={Banner01} class="d-block w-100" alt="..." />
              <div class="carousel-caption  d-md-block">
                <h1>Empowering Dreams, Building Legacies</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
                <button>Explore</button>
              </div>
            </div>
            <div class="carousel-item" id="homeBanner">
              <img src={Banner03} class="d-block w-100" alt="..." />
              <div class="carousel-caption  d-md-block">
                <h1>
                  Commited To Effective And<br></br>Superior{" "}
                  <span>Quality </span> Results
                </h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
                <button>Explore</button>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container-fluid" id="visionBox">
        <h2>What We Do</h2>
        <div class="row">
          <div class="col-lg-4 col-md-4">
            <div id="visionCard">
              <i class="bx bx-building-house"></i>
              <h6>Infrusture Construction</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="visionCard">
              <i class="bx bx-bookmark-alt-minus"></i>
              <h6>Civil Engineering</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="visionCard">
              <i class="bx bx-briefcase-alt"></i>
              <h6> Quantity Survery</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" id="workList">
        <h2>No Work Is Too Small Or Too Big For Us</h2>
        <div class="row" id="workListBox">
          <div class="col-lg-4 col-md-4">
            <div id="workListBoxCard">
              <ul>
                <li>It has survived not only five centuries,</li>
                <li>It has survived not only five centuries,</li>
                <li>It has survived not only five centuries,</li>
                <li>It has survived not only five centuries,</li>
                <li>It has survived not only five centuries,</li>
                <li>It has survived not only five centuries,</li>
                <li>It has survived not only five centuries,</li>
                <li>It has survived not only five centuries,</li>
                <li>It has survived not only five centuries,</li>
                <li>It has survived not only five centuries,</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="workListBoxCard">
              <ul>
                <li>It has survived not only five centuries,</li>
                <li>It has survived not only five centuries,</li>
                <li>It has survived not only five centuries,</li>
                <li>It has survived not only five centuries,</li>
                <li>It has survived not only five centuries,</li>
                <li>It has survived not only five centuries,</li>
                <li>It has survived not only five centuries,</li>
                <li>It has survived not only five centuries,</li>
                <li>It has survived not only five centuries,</li>
                <li>It has survived not only five centuries,</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="workListBoxCard">
              <ul>
                <li>It has survived not only five centuries,</li>
                <li>It has survived not only five centuries,</li>
                <li>It has survivcenturies,</li>
                <li>It has survived not only five centuries,</li>
                <li>It has survived not only five centuries,</li>
                <li>It has survived not only five centuries,</li>
                <li>It has survived not only five centuries,</li>
                <li>It has survived not only five centuries,</li>
                <li>It has survived not only five centuries,</li>
                <li>It has survived not only five centuries,</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" id="ourVisionWrap">
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
      <div className="container-fluid" id="getInTouch">
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
      <Footer/>
    </>
  );
}

export default Home;
