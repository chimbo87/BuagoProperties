import React from "react";
import "./Contact.css";
import Footer from "../../components/footer/Footer";

function Contact() {
  return (
    <>
      <div className="container-fluid" id="theContactPage">
        <h2>Contact Us</h2>
        
      </div>
      <div className="container" id="theContactPageBox">
        <div class="row">
          <div class="col-lg-8 col-md-4">
            <form class="row g-3" id="contactForm">
              <h4>Please send us your feedback</h4>
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
                  Phone Number
                </label>
                <input type="number" class="form-control" id="inputAddress" />
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
          <div class="col-lg-4 col-md-4">
            <div id="contactSocials">
              {/* <h4>Follow Us:</h4> */}
              <div id="contactSocialsCard">
                <button>Facebook</button>
                <button>Instagram</button>
                <button>Whatsapp</button>
              </div>
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
        <div id="contactCareers">
          <h4>We are hiring</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <ul>
            <li>Brick Layers</li>
            <li>Plumber</li>
            <li>General Workers</li>
            <li>Electrician</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
