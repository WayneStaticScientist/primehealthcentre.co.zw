import React from "react";

export const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer-area ft-bg">
        <div className="footer-widget">
          <div className="container">
            <div className="row footer-widget-wrapper pt-100 pb-40">
              {/* Column 1: About & Primary Contact */}
              <div className="col-md-6 col-lg-4">
                <div className="footer-widget-box about-us">
                  <a href="/" className="footer-logo">
                    <img
                      src="assets/img/logo/logo-light.png"
                      alt="Prime Health Centre Logo"
                    />
                  </a>
                  <p className="mb-3">
                    Your premier partner in Occupational Health and Safety.
                    Promoting productivity through prevention and professional
                    medical surveillance.
                  </p>
                  <ul className="footer-contact">
                    <li>
                      <a href="tel:+263778247413">
                        <i className="far fa-phone" />
                        +263 77 824 7413 / +263 71 271 2701
                      </a>
                    </li>
                    <li>
                      <i className="far fa-envelope" />
                      primehealthcentre@gmail.com
                    </li>
                    <li>
                      <i className="far fa-clock" />
                      Mon-Fri (8:00 AM - 5:00 PM)
                    </li>
                  </ul>
                </div>
              </div>

              {/* Column 2: Our Locations (Slide 10) */}
              <div className="col-md-6 col-lg-3">
                <div className="footer-widget-box list">
                  <h4 className="footer-widget-title">Our Clinics</h4>
                  <ul className="footer-list">
                    <li>
                      <i className="fas fa-map-marker-alt text-white mr-2" />
                      <strong>Main Clinic:</strong>
                      <br />
                      167 Samora Machel Eastlea, Harare
                    </li>
                    <li className="mt-3">
                      <i className="fas fa-map-marker-alt text-white mr-2" />
                      <strong>Satellite Clinic:</strong>
                      <br />
                      18 Coventry Rd, Workington, Harare
                    </li>
                  </ul>
                </div>
              </div>

              {/* Column 3: Core Services */}
              <div className="col-md-6 col-lg-3">
                <div className="footer-widget-box list">
                  <h4 className="footer-widget-title">Medical Services</h4>
                  <ul className="footer-list">
                    <li>
                      <a href="#">Medical Surveillance</a>
                    </li>
                    <li>
                      <a href="#">Audiometry & Spirometry</a>
                    </li>
                    <li>
                      <a href="#">Digital X-Rays</a>
                    </li>
                    <li>
                      <a href="#">Food Handlers Exams</a>
                    </li>
                    <li>
                      <a href="#">Wellness Programs</a>
                    </li>
                    <li>
                      <a href="#">First Aid Training</a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Column 4: Quick Links */}
              <div className="col-md-6 col-lg-2">
                <div className="footer-widget-box list">
                  <h4 className="footer-widget-title">Quick Links</h4>
                  <ul className="footer-list">
                    <li>
                      <a href="#about">About Us</a>
                    </li>
                    <li>
                      <a href="#testimonials">References</a>
                    </li>
                    <li>
                      <a href="#">Terms of Service</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Area */}
        <div className="copyright">
          <div className="container">
            <div className="copyright-wrap">
              <div className="row">
                <div className="col-12 col-lg-6 align-self-center">
                  <p className="copyright-text">
                    © Copyright {new Date().getFullYear()}{" "}
                    <a href="/"> Prime Health Centre </a> All Rights Reserved.
                  </p>
                </div>
                <div className="col-12 col-lg-6 align-self-center">
                  <div className="footer-social">
                    <span>Follow Us:</span>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="#">
                      <i className="fab fa-whatsapp" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <a href="#" id="scroll-top">
        <i className="far fa-arrow-up-from-arc" />
      </a>
    </React.Fragment>
  );
};
