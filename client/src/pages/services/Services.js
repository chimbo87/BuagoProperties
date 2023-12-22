import React from "react";
import "./Services.css";
import Banner02 from "../../assets/about.jpg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import User01 from "../../assets/user01.jpeg";
import User02 from "../../assets/user02.jpeg";
import User03 from "../../assets/user03.jpg";
import Footer from "../../components/footer/Footer";

function Services() {
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <div id="serviceCard">
      <img src={User01} onDragStart={handleDragStart} role="presentation" />
    </div>,
    <div id="serviceCard">
      <img src={User02} onDragStart={handleDragStart} role="presentation" />
    </div>,
   <div id="serviceCard">
      <img src={User03} onDragStart={handleDragStart} role="presentation" />
    </div>,
    <div id="serviceCard">
      <img src={User02} onDragStart={handleDragStart} role="presentation" />
    </div>,
  <div id="serviceCard">
      <img src={User01} onDragStart={handleDragStart} role="presentation" />
    </div>,
   <div id="serviceCard">
      <img src={User02} onDragStart={handleDragStart} role="presentation" />
    </div>,
    <div id="serviceCard">
      <img src={Banner02} onDragStart={handleDragStart} role="presentation" />
    </div>,
    <div id="serviceCard">
      <img src={User01} onDragStart={handleDragStart} role="presentation" />
    </div>,
   <div id="serviceCard">
      <img src={User01} onDragStart={handleDragStart} role="presentation" />
    </div>,

<div id="serviceCard">
      <img src={User02} onDragStart={handleDragStart} role="presentation" />
    </div>,
  ];
  const responsive = {
    0: { items: 1 },
    1024: { items: 3 },
  };
  return (
    <>
      <div className="container-fluid" id="ourServices">
        <h2>Our Services</h2>
      </div>
      <div className="container" id="ourServicesBox">
        <div class="row">
          <div class="col-lg-6 col-md-4">
            <div id="serviceCardInfor">
              <h4>Civil Engineering</h4>
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
                Lorem Ipsum.
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
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div>
              <img src={Banner02} class="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-4">
            <div>
              <img src={Banner02} class="d-block w-100" alt="..." />
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div  id="serviceCardInfor">
              <h4>Infastructure Construction</h4>
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
                Lorem Ipsum.
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
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-4">
            <div  id="serviceCardInfor">
              <h4>Quantity Survior</h4>
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
                Lorem Ipsum.
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
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div>
              <img src={Banner02} class="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
        <div id="services">
          <h4>Latest Projects</h4>
          <AliceCarousel
            mouseTracking
            items={items}
            autoPlay
            disableButtonsControls={true}
            disableDotsControls={false}
            infinite={true}
            autoPlayInterval={3000}
            responsive={responsive}
          />
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Services;
