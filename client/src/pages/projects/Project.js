import React from "react";
import "./Project.css";
import Banner02 from "../../assets/about.jpg";
import Footer from "../../components/footer/Footer";

function Project() {
  return (
    <>
      <div className="container-fluid" id="projectPage">
        <h2>Our Projects</h2>
      </div>
      <div className="container" id="projectPageBox">
        <div id="projectPageSearch">
          <div id="projectPageSearchCard">
            <select class="form-select" aria-label="Default select example">
              <option selected>Filter All</option>
              <option value="Roofing">Roofing</option>
              <option value="Flooring">Flooring</option>
              <option value="Plumbing">Plumbing</option>
              <option value="Building">Building</option>
              <option value="Paving">Paving</option>
            </select>
          </div>
          <div id="projectPageSearchCard">
            <input type="search" placeholder="Search Project" />
          </div>
        </div>
        <div class="row">
        <div class="col-lg-4 col-md-4">
            <div id="theServiceCard">
              <img src={Banner02} class="d-block w-100" alt="..." />
              <div id="theServiceCardBox">
                <h5>Paving</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <p>Harare, Zimbabwe ~<i>23 October 2023</i></p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="theServiceCard">
              <img src={Banner02} class="d-block w-100" alt="..." />
              <div id="theServiceCardBox">
                <h5>Paving</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <p>Harare, Zimbabwe ~<i>23 October 2023</i></p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="theServiceCard">
              <img src={Banner02} class="d-block w-100" alt="..." />
              <div id="theServiceCardBox">
                <h5>Paving</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <p>Harare, Zimbabwe ~<i>23 October 2023</i></p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="theServiceCard">
              <img src={Banner02} class="d-block w-100" alt="..." />
              <div id="theServiceCardBox">
                <h5>Paving</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <p>Harare, Zimbabwe ~<i>23 October 2023</i></p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="theServiceCard">
              <img src={Banner02} class="d-block w-100" alt="..." />
              <div id="theServiceCardBox">
                <h5>Paving</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <p>Harare, Zimbabwe ~<i>23 October 2023</i></p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="theServiceCard">
              <img src={Banner02} class="d-block w-100" alt="..." />
              <div id="theServiceCardBox">
                <h5>Paving</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <p>Harare, Zimbabwe ~<i>23 October 2023</i></p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="theServiceCard">
              <img src={Banner02} class="d-block w-100" alt="..." />
              <div id="theServiceCardBox">
                <h5>Paving</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <p>Harare, Zimbabwe ~<i>23 October 2023</i></p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="theServiceCard">
              <img src={Banner02} class="d-block w-100" alt="..." />
              <div id="theServiceCardBox">
                <h5>Paving</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <p>Harare, Zimbabwe ~<i>23 October 2023</i></p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="theServiceCard">
              <img src={Banner02} class="d-block w-100" alt="..." />
              <div id="theServiceCardBox">
                <h5>Paving</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <p>Harare, Zimbabwe ~<i>23 October 2023</i></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="readMoreBtn">
        <button>See More</button>
      </div>
      <Footer />
    </>
  );
}

export default Project;
