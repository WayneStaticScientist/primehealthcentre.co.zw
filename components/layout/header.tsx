"use client";
import { PHSConstants, services } from "@/utils/constants";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Header = ({ page }: { page?: string }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If we scroll more than the height of the top bar (usually ~50px)
      if (window.scrollY > 60) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      {/* header top */}
      <div className="header-top">
        <div className="container">
          <div className="header-top-wrap">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6 col-xl-5">
                <div className="header-top-left">
                  <ul className="header-top-list">
                    <li>
                      <a href={`mailto:${PHSConstants.Email}`}>
                        <i className="far fa-envelopes" />
                        <span>{PHSConstants.Email}</span>
                      </a>
                    </li>
                    <li>
                      <a href={`tel:${PHSConstants.PhoneNumbers[0]}`}>
                        <i className="fa-brands fa-whatsapp"></i>{" "}
                        {PHSConstants.PhoneNumbers[0]}
                      </a>
                    </li>
                    <li>
                      <a href={`tel:${PHSConstants.Calls[0]}`}>
                        <i className="far fa-phone" /> {PHSConstants.Calls[0]}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6 col-xl-7">
                <div className="header-top-right">
                  <ul className="header-top-list">
                    <li>
                      <div className="dropdown">
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            USD
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="social">
                      <div className="header-top-social">
                        <span>Follow Us: </span>
                        <a href={`${PHSConstants.FACEBOOK_PAGE}`}>
                          <i className="fab fa-facebook" />
                        </a>
                        <a href="#">
                          <i className="fab fa-linkedin" />
                        </a>
                        <a href="#">
                          <i className="fab fa-whatsapp" />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* navbar - Added Dynamic Class here */}
      <div
        className={`main-navigation ${isSticky ? "sticky-header" : ""}`}
        style={{
          transition: "all 0.3s ease-in-out",
          width: "100%",
          zIndex: 1000,
        }}
      >
        <nav className="navbar navbar-expand-lg">
          <div className="container position-relative">
            <a className="navbar-brand" href="/">
              <img src="/assets/img/logo/logo.png" alt="logo" />
            </a>

            <div className="mobile-menu-right">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
              >
                <span />
                <span />
                <span />
              </button>
            </div>

            <div
              className="offcanvas offcanvas-start"
              tabIndex={-1}
              id="offcanvasNavbar"
            >
              <div className="offcanvas-header">
                <Link href="/" className="offcanvas-brand ">
                  <img src="/assets/img/logo/logo.png" alt="" />
                </Link>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                />
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1">
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${page === "home" ? "active" : ""}`}
                      href="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${page === "about" ? "active" : ""}`}
                      href="/about"
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Services
                    </a>
                    <ul className="dropdown-menu fade-down">
                      {services.map((service, index) => (
                        <li key={index}>
                          <Link
                            className={`dropdown-item ${
                              page === service.slug ? "active" : ""
                            }`}
                            href={`/services/${service.slug}`}
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        page === "contact" ? "active" : ""
                      }`}
                      href="/contact"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>

                {/* Cleaned up nav-right (Removed Shopping Bag/Wishlist) */}
                <div className="nav-right">
                  <Link href="/contact" className="theme-btn">
                    Book Now <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
