"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PHCDialog from "./dialog-layout";
import { useState } from "react";
import { services } from "@/utils/constants";
import { BiCaretRight } from "react-icons/bi";

export const TrendingItem = () => {
  const services_local = [
    { title: "Doctor Examination", img: "01.png", tag: "Expert Care" },
    { title: "Titmus Vision Screener", img: "02.png", tag: "Diagnostic" },
    { title: "Audiometry (Hearing Test)", img: "03.png", tag: "Occupational" },
    { title: "Spirometry (Lung Function)", img: "04.png", tag: "Occupational" },
    { title: "Digital X-Ray", img: "05.png", tag: "Advanced" },
    { title: "Food Handler Exams", img: "06.png", tag: "Compliance" },
    { title: "First Aid Training", img: "07.png", tag: "Certification" },
  ];
  const [servicesDialog, setServicesDialog] = useState(false);
  return (
    <div className="product-area pb-100">
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
      <div className="container">
        <div className="row">
          <div className="col-12 wow fadeInDown" data-wow-delay=".25s">
            <div className="site-heading-inline">
              <h2 className="site-title">Our Specialized Services</h2>
              <a
                onClick={() => setServicesDialog(true)}
                style={{
                  cursor: "pointer",
                }}
              >
                All Services <i className="fas fa-angle-double-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="product-wrap item-2 wow fadeInUp" data-wow-delay=".25s">
          <Carousel
            className="product-slider owl-theme"
            autoPlay={true}
            autoPlaySpeed={3000}
            infinite={true}
            arrows={false}
            showDots={true}
            responsive={{
              superLargeDesktop: {
                breakpoint: { max: 4000, min: 3000 },
                items: 4,
              },
              desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
              tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
              mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
            }}
          >
            {services_local.map((service, index) => (
              <div className="product-item" key={index}>
                <div className="product-img">
                  <span className="type new">{service.tag}</span>
                  <a href="#">
                    <img
                      src={`/assets/img/product/${service.img}`}
                      alt={service.title}
                    />
                  </a>
                  <div className="product-action-wrap">
                    <div className="product-action">
                      <a href="#" title="View Details">
                        <i className="far fa-eye" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="product-title">
                    <a href="#">{service.title}</a>
                  </h3>
                  <div className="product-rate">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <div className="product-bottom">
                    <div className="product-price">
                      <span style={{ fontSize: "14px", color: "#666" }}>
                        Professional Consultation
                      </span>
                    </div>
                    <a
                      href="#contact"
                      className="product-cart-btn"
                      title="Book Appointment"
                    >
                      <i className="far fa-calendar-check" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
