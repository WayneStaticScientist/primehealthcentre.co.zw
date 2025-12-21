export const SmallBanner = () => {
  return (
    <div className="small-banner pb-100">
      <div className="container wow fadeInUp" data-wow-delay=".25s">
        <div className="row g-4">
          {/* Card 1: Vision Screening */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="banner-item">
              <img
                src="assets/img/banner/mini-banner-1.jpg"
                alt="Vision Screening"
              />
              <div className="banner-content">
                <p>Diagnostic Services</p>
                <h3>
                  Titmus Vision <br /> Screener
                </h3>
                <a href="#services">Learn More</a>
              </div>
            </div>
          </div>

          {/* Card 2: Audiometry & Spirometry */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="banner-item">
              <img src="assets/img/banner/mini-banner-2.jpg" alt="Audiometry" />
              <div className="banner-content">
                <p>Worker Safety</p>
                <h3>
                  Audiometry & <br /> Spirometry Exams
                </h3>
                <a href="#services">Discover Now</a>
              </div>
            </div>
          </div>

          {/* Card 3: X-Ray & Food Handlers */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="banner-item">
              <img
                src="assets/img/banner/mini-banner-3.jpg"
                alt="Digital X-ray"
              />
              <div className="banner-content">
                <p>Regulatory Compliance</p>
                <h3>
                  Digital X-ray & <br /> Food Handler Exams
                </h3>
                <a href="#services">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
