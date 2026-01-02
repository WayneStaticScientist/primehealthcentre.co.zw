import { PHSConstants } from "@/utils/constants";
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
                      <a href={`tel:${PHSConstants.PhoneNumbers[0]}`}>
                        <i className="fa-brands fa-whatsapp"></i>
                        {PHSConstants.PhoneNumbers.map((data, index) => (
                          <React.Fragment key={index}>
                            {data}{" "}
                            {index < PHSConstants.PhoneNumbers.length - 1
                              ? "/"
                              : ""}
                          </React.Fragment>
                        ))}
                      </a>
                    </li>
                    <li>
                      <a href={`tel:${PHSConstants.Calls[0]}`}>
                        <i className="far fa-phone" />
                        {PHSConstants.Calls.map((data, index) => (
                          <React.Fragment key={index}>
                            {data}{" "}
                            {index < PHSConstants.Calls.length - 1 ? "/" : ""}
                          </React.Fragment>
                        ))}
                      </a>
                    </li>
                    <li>
                      <i className="far fa-envelope" />
                      {PHSConstants.Email}
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
                    <li className="text-white">
                      <i className="fas fa-map-marker-alt text-white mr-2" />{" "}
                      <strong>Main Clinic:</strong>
                      <br />
                      {PHSConstants.addresses[0]
                        .split("\n")
                        .splice(1)
                        .join("\n")}
                    </li>
                    <li className="mt-3 text-white">
                      <i className="fas fa-map-marker-alt text-white mr-2" />{" "}
                      <strong>Bulawayo:</strong>
                      <br />
                      {PHSConstants.addresses[1]
                        .split("\n")
                        .splice(1)
                        .join("\n")}
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
