export const AboutLayout = () => {
  return (
    <div className="about-area py-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-left wow fadeInLeft" data-wow-delay=".25s">
              <div className="about-img">
                <div className="row">
                  <div className="col-7">
                    {/* Image of the Prime Health Mobile Unit would fit perfectly here */}
                    <img
                      className="img-1"
                      src="/assets/img/about/01.jpg"
                      alt="Mobile Medical Unit"
                    />
                  </div>
                  <div className="col-5 align-self-end">
                    <img
                      className="img-2"
                      src="/assets/img/about/02.jpg"
                      alt="Occupational Health Examination"
                    />
                  </div>
                </div>
              </div>
              <div className="about-experience">
                <div className="about-experience-icon">
                  <img src="/assets/img/icon/experience.svg" alt="" />
                </div>
                <b>
                  Leading <br /> Provider
                </b>
              </div>
              <div className="about-shape">
                <img src="/assets/img/shape/01.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-right wow fadeInRight" data-wow-delay=".25s">
              <div className="site-heading mb-3">
                <span className="site-title-tagline justify-content-start">
                  <i className="fas fa-hand-holding-medical" /> About Us
                </span>
                <h2 className="site-title">
                  Comprehensive Health Services Focused on{" "}
                  <span>Occupational Health</span>
                </h2>
              </div>
              <p>
                Prime Health Centre is dedicated to being the leading provider
                in comprehensive health services with a primary emphasis on
                occupational health. We promote safe and healthy work
                environments that enhance the well-being and productivity of
                workers while actively combating the risk of work-related
                injuries and illnesses
              </p>
              <div className="about-list">
                <ul>
                  <li>
                    <i className="fas fa-check-double" /> Expert Occupational
                    Services & Education
                  </li>
                  <li>
                    <i className="fas fa-check-double" /> Specialized Mobile
                    Medical Units
                  </li>
                  <li>
                    <i className="fas fa-check-double" /> Digital X-Ray &
                    Spirometry Screening
                  </li>
                  <li>
                    <i className="fas fa-check-double" /> Integrity, Excellence
                    & Confidentiality
                  </li>
                </ul>
              </div>
              <a href="/about" className="theme-btn mt-4">
                Discover More
                <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
