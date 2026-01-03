"use client";
import { MdVerified } from "react-icons/md";
import { PHSConstants, services } from "@/utils/constants";
import PHCDialog from "./dialog-layout";
import { useState } from "react";
import { BiCaretRight } from "react-icons/bi";

export const HeroSlider = () => {
  const [servicesDialog, setServicesDialog] = useState(false);
  return (
    <div className="hero-section hs-1">
      <PHCDialog
        title="Services"
        isOpen={servicesDialog}
        onClose={() => setServicesDialog(false)}
        children={
          <ul>
            {services.map((service, index) => (
              <li
                onClick={() => {
                  window.location.href = "/services/" + service.slug;
                }}
                style={{
                  cursor: "pointer",
                  padding: "10px",
                }}
                key={index}
                className="tw:hover:bg-[#e6e6e620]! tw:flex! tw:items-center!"
              >
                <BiCaretRight /> {service.name}
              </li>
            ))}
          </ul>
        }
      />
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
                  Comprehensive <strong> healthcare services</strong> ranging
                  from <strong>General doctor consultations</strong>,
                  <strong>
                    minor surgical procedures , baby vaccinations .{" "}
                  </strong>
                  <strong>
                    Industrial Occupational health surveillance , wellness
                    clinics and First Aid Training
                  </strong>
                </p>
                <div
                  className="hero-btn"
                  data-animation="fadeInUp"
                  data-delay="1s"
                >
                  <div
                    onClick={() => setServicesDialog(true)}
                    className="theme-btn tw:cursor-pointer"
                  >
                    View Medical Services
                    <i className="fas fa-arrow-right" />
                  </div>
                  <a href="/contact" className="theme-btn theme-btn2">
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
                  <div className="icon tw:flex tw:items-center! tw:justify-center">
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
