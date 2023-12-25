import React from "react";
import "./About.css";
import Banner02 from "../../assets/about.jpg";
import User01 from "../../assets/user01.jpeg";
import User02 from "../../assets/user02.jpeg";
import User03 from "../../assets/user03.jpg";
import Footer from "../../components/footer/Footer";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function About() {
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <div id="reviewCard">
      <img src={User01} onDragStart={handleDragStart} role="presentation" />

      <p>
        <span>
          <i class="bx bxs-quote-left"></i>
        </span>{" "}
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
        <span>
          <i class="bx bxs-quote-right"></i>
        </span>
      </p>
      <small>
        ~<i>John Doe</i>
      </small>
    </div>,
    <div id="reviewCard">
      <img src={User02} onDragStart={handleDragStart} role="presentation" />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>
      <small>
        <i>John Doe</i>
      </small>
    </div>,
    <div id="reviewCard">
      <img src={User03} onDragStart={handleDragStart} role="presentation" />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>
      <small>
        <i>John Doe</i>
      </small>
    </div>,
    <div id="reviewCard">
      <img src={User02} onDragStart={handleDragStart} role="presentation" />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>
      <small>
        <i>John Doe</i>
      </small>
    </div>,
    <div id="reviewCard">
      <img src={User01} onDragStart={handleDragStart} role="presentation" />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>
      <small>
        <i>John Doe</i>
      </small>
    </div>,
    <div id="reviewCard">
      <img src={User02} onDragStart={handleDragStart} role="presentation" />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>
      <small>
        <i>John Doe</i>
      </small>
    </div>,
    <div id="reviewCard">
      <img src={User03} onDragStart={handleDragStart} role="presentation" />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>
      <small>
        <i>John Doe</i>
      </small>
    </div>,
    <div id="reviewCard">
      <img src={User01} onDragStart={handleDragStart} role="presentation" />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>
      <small>
        <i>John Doe</i>
      </small>
    </div>,
    <div id="reviewCard">
      <img src={User01} onDragStart={handleDragStart} role="presentation" />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>
      <small>
        <i>John Doe</i>
      </small>
    </div>,

    <div id="reviewCard">
      <img src={User02} onDragStart={handleDragStart} role="presentation" />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>
      <small>
        <i>John Doe</i>
      </small>
    </div>,
  ];
  const responsive = {
    0: { items: 1 },
    1024: { items: 1 },
  };
  return (
    <>
      <div className="container-fluid" id="theAboutPage">
        <h2>About Us</h2>
      </div>
      <div className="container" id="theAboutPageBox">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div id="aboutCard">
              <h4>Who are we ?</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div id="aboutCard">
              <img src={Banner02} class="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
        <div class="row" id="ourTeam">
          <h4>Meet our team</h4>
          <div class="col-lg-4 col-md-4">
            <div id="aboutTeamCard">
              <img src={User03} class="d-block w-100" alt="..." />
              <p>
                W. Mushambi~<i>Managing Director</i>
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="aboutTeamCard">
              <img src={User01} class="d-block w-100" alt="..." />
              <p>
                W. Mushambi~<i>Managing Director</i>
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="aboutTeamCard">
              <img src={User03} class="d-block w-100" alt="..." />
              <p>
                W. Mushambi~<i>Managing Director</i>
              </p>
            </div>
          </div>
        </div>
        <div class="row" id="aboutRecords">
        
          <div class="col-lg-4 col-md-4">
            <div id="aboutRecordsCard">
              <h4>10+</h4>
              <h5>Years Of Experience</h5>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="aboutRecordsCard">
              <h4>1000+</h4>
              <h5>Completed Projects</h5>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="aboutRecordsCard">
              <h4>100+</h4>
              <h5>Happy Clients</h5>
            </div>
          </div>
        </div>
        <div id="faqBox">
          <h4>Why Choose Us ?</h4>
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  Accordion Item #1
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                class="accordion-collapse collapse show"
              >
                <div class="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  Accordion Item #2
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                class="accordion-collapse collapse"
              >
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Accordion Item #3
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                class="accordion-collapse collapse"
              >
                <div class="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Accordion Item #3
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                class="accordion-collapse collapse"
              >
                <div class="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Accordion Item #3
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                class="accordion-collapse collapse"
              >
                <div class="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div id="reviews">
          <h4>What Our Clients Say</h4>
          <AliceCarousel
            mouseTracking
            items={items}
            autoPlay
            disableButtonsControls={true}
            disableDotsControls={false}
            infinite={true}
            autoPlayInterval={3000}
            responsive={responsive}
            // animationType="fadeout"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
