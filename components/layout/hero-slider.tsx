"use client";
import { MdVerified } from "react-icons/md";
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
                  For all your <span>Medical </span> Solutions
                </h1>
                <p data-animation="fadeInLeft" data-delay=".75s">
                  Comprehensive <strong> healthcare</strong> ranging from{" "}
                  <strong>General doctor consultations</strong> to{" "}
                  <strong>min surgical procedures </strong>{" "}
                  <strong>
                    Industrial Occupational health , surveillance , wellness
                    clinics and First Aid Training
                  </strong>
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
                    src="/assets/img/hero/hero-1.png"
                    alt="Medical Screening Services"
                  />
                </div>
                <div className="hero-img-info animate-sweep">
                  <div className="icon">
                    <MdVerified size={30} color="white" />
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
