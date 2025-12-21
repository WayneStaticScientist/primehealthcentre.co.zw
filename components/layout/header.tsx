import { PHSConstants } from "@/utils/constants";

export const Header = () => {
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
                        <i className="far fa-headset" />{" "}
                        {PHSConstants.PhoneNumbers[0]}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="col-12 col-md-6 col-lg-6 col-xl-7">
                <div className="header-top-right">
                  <ul className="header-top-list">
                    <li>
                      <a href="#">
                        <i className="far fa-timer" /> Daily Deal
                      </a>
                    </li>
                    <li>
                      <div className="dropdown">
                        <a
                          href="#"
                          className="dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="far fa-usd" /> USD
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            USD
                          </a>
                          <a className="dropdown-item" href="#">
                            EUR
                          </a>
                          <a className="dropdown-item" href="#">
                            AUD
                          </a>
                          <a className="dropdown-item" href="#">
                            CUD
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown">
                        <a
                          href="#"
                          className="dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="far fa-globe-americas" /> EN
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            EN
                          </a>
                          <a className="dropdown-item" href="#">
                            FR
                          </a>
                          <a className="dropdown-item" href="#">
                            DE
                          </a>
                          <a className="dropdown-item" href="#">
                            RU
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="social">
                      <div className="header-top-social">
                        <span>Follow Us: </span>
                        <a href="#">
                          <i className="fab fa-facebook" />
                        </a>
                        <a href="#">
                          <i className="fab fa-x-twitter" />
                        </a>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                        <a href="#">
                          <i className="fab fa-linkedin" />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* header top end */}
      {/* navbar */}
      <div className="main-navigation">
        <nav className="navbar navbar-expand-lg">
          <div className="container position-relative">
            <a className="navbar-brand">
              <img src="/assets/img/logo/logo.png" alt="logo" />
            </a>
            <div className="mobile-menu-right">
              <div className="mobile-menu-btn">
                <a href="#" className="nav-right-link search-box-outer">
                  <i className="far fa-search" />
                </a>

                <a href="shop-cart.html" className="nav-right-link">
                  <i className="far fa-shopping-bag" />
                  <span>5</span>
                </a>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
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
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <a
                  href="index-2.html"
                  className="offcanvas-brand"
                  id="offcanvasNavbarLabel"
                >
                  <img src="assets/img/logo/logo.png" alt="" />
                </a>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1">
                  <li className="nav-item">
                    <a className="nav-link" href="about.html">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about.html">
                      About
                    </a>
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
                      <li>
                        <a className="dropdown-item" href="about.html">
                          Doctor Examination
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="brand.html">
                          Titmus Vision Screener
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="brand.html">
                          Audiometry
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="brand.html">
                          Spirometry
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="brand.html">
                          Titmus Vision Screener
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="brand.html">
                          Digital Xray
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="brand.html">
                          Food Handler Exams
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="brand.html">
                          Wellness Clinics
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about.html">
                      Contact Us
                    </a>
                  </li>
                </ul>
                {/* nav-right */}
                <div className="nav-right">
                  <a href="#" className="nav-right-link search-box-outer">
                    <i className="far fa-search" />
                  </a>
                  <a href="wishlist.html" className="nav-right-link">
                    <i className="far fa-heart" />
                    <span>2</span>
                  </a>
                  <a href="shop-cart.html" className="nav-right-link">
                    <i className="far fa-shopping-bag" />
                    <span>5</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* navbar end */}
    </header>
  );
};
