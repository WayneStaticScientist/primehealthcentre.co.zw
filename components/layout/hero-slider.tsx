"use client";

import { PHSConstants } from "@/utils/constants";

export const HeroSlider = () => {
  return (
    <div className="hero-section hs-1">
      <div
        className="hero-single"
        style={{ backgroundImage: "url(/assets/img/hero/bg.png)" }}
      >
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <h6
                  className="hero-sub-title"
                  data-animation="fadeInUp"
                  data-delay=".25s"
                >
                  {PHSConstants.COMPANY_NAME}
                </h6>
                <h1
                  className="hero-title"
                  data-animation="fadeInRight"
                  data-delay=".50s"
                >
                  Specialized <span>Medical Screening</span> & Wellness
                  Solutions
                </h1>
                <p data-animation="fadeInLeft" data-delay=".75s">
                  From <strong>Audiometry</strong> and{" "}
                  <strong>Spirometry</strong> to <strong>Digital X-rays</strong>{" "}
                  and <strong>Food Handler Exams</strong>, we provide expert
                  services to protect your workers' health and safety.
                </p>
                <div
                  className="hero-btn"
                  data-animation="fadeInUp"
                  data-delay="1s"
                >
                  <a href="#services" className="theme-btn">
                    View Medical Services
                    <i className="fas fa-arrow-right" />
                  </a>
                  <a href="#contact" className="theme-btn theme-btn2">
                    Book an Exam
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-right">
                <div className="hero-img">
                  {/* Use an image representing a medical professional or screening equipment */}
                  <img
                    src="assets/img/hero/hero-1.png"
                    alt="Medical Screening Services"
                  />
                </div>
                <div className="hero-img-info">
                  <div className="icon">
                    {/* Changed to a more relevant icon context */}
                    <img src="assets/img/icon/check.svg" alt="Certified" />
                  </div>
                  <h6>First Aid Training & Wellness Clinics Available</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
