export const ProductList = () => {
  return (
    <div className="product-list py-100">
      <div className="container wow fadeInUp" data-wow-delay=".25s">
        <div className="row g-4">
          {/* Column 1: Medical Surveillance (Slide 5-6) */}
          <div className="col-12 col-md-6 col-lg-6 col-xl-4">
            <div className="product-list-box border">
              <h2 className="product-list-title">Medical Surveillance</h2>

              <div className="product-list-item">
                <div className="product-list-img">
                  <a href="#">
                    <img src="/assets/img/product/03.png" alt="Audiometry" />
                  </a>
                </div>
                <div className="product-list-content">
                  <h4>
                    <a href="#">Audiometry Screening</a>
                  </h4>
                  <p className="small text-muted">Hearing Baseline & Annuals</p>
                </div>
                <a
                  href="#contact"
                  className="product-list-btn"
                  title="Book Consultation"
                >
                  <i className="far fa-calendar-plus" />
                </a>
              </div>

              <div className="product-list-item">
                <div className="product-list-img">
                  <a href="#">
                    <img src="/assets/img/product/04.png" alt="Spirometry" />
                  </a>
                </div>
                <div className="product-list-content">
                  <h4>
                    <a href="#">Lung Function (Spirometry)</a>
                  </h4>
                  <p className="small text-muted">
                    Respiratory Health Tracking
                  </p>
                </div>
                <a href="#contact" className="product-list-btn">
                  <i className="far fa-calendar-plus" />
                </a>
              </div>

              <div className="product-list-item">
                <div className="product-list-img">
                  <a href="#">
                    <img src="/assets/img/product/02.png" alt="Vision" />
                  </a>
                </div>
                <div className="product-list-content">
                  <h4>
                    <a href="#">Titmus Vision Testing</a>
                  </h4>
                  <p className="small text-muted">Keystone/Titmus Screening</p>
                </div>
                <a href="#contact" className="product-list-btn">
                  <i className="far fa-calendar-plus" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Diagnostic Services (Slide 7) */}
          <div className="col-12 col-md-6 col-lg-6 col-xl-4">
            <div className="product-list-box border">
              <h2 className="product-list-title">Diagnostics & Exams</h2>

              <div className="product-list-item">
                <div className="product-list-img">
                  <a href="#">
                    <img src="/assets/img/product/05.png" alt="X-Ray" />
                  </a>
                </div>
                <div className="product-list-content">
                  <h4>
                    <a href="#">Digital X-Ray</a>
                  </h4>
                  <p className="small text-muted">Chest & Injury Imaging</p>
                </div>
                <a href="#contact" className="product-list-btn">
                  <i className="far fa-file-medical" />
                </a>
              </div>

              <div className="product-list-item">
                <div className="product-list-img">
                  <a href="#">
                    <img src="/assets/img/product/06.png" alt="Food Handlers" />
                  </a>
                </div>
                <div className="product-list-content">
                  <h4>
                    <a href="#">Food Handler Exams</a>
                  </h4>
                  <p className="small text-muted">Health & Hygiene Certs</p>
                </div>
                <a href="#contact" className="product-list-btn">
                  <i className="far fa-file-medical" />
                </a>
              </div>

              <div className="product-list-item">
                <div className="product-list-img">
                  <a href="#">
                    <img src="/assets/img/product/06.png" alt="Lab" />
                  </a>
                </div>
                <div className="product-list-content">
                  <h4>
                    <a href="#">Laboratory Tests</a>
                  </h4>
                  <p className="small text-muted">
                    Full Blood Count & Urinalysis
                  </p>
                </div>
                <a href="#contact" className="product-list-btn">
                  <i className="far fa-file-medical" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Corporate Wellness (Slide 8) */}
          <div className="col-12 col-md-6 col-lg-6 col-xl-4">
            <div className="product-list-box border">
              <h2 className="product-list-title">Corporate Wellness</h2>

              <div className="product-list-item">
                <div className="product-list-img">
                  <a href="#">
                    <img src="/assets/img/product/07.png" alt="First Aid" />
                  </a>
                </div>
                <div className="product-list-content">
                  <h4>
                    <a href="#">First Aid Training</a>
                  </h4>
                  <p className="small text-muted">Certified Workplace Safety</p>
                </div>
                <a href="#contact" className="product-list-btn">
                  <i className="far fa-graduation-cap" />
                </a>
              </div>

              <div className="product-list-item">
                <div className="product-list-img">
                  <a href="#">
                    <img src="/assets/img/product/08.png" alt="Clinics" />
                  </a>
                </div>
                <div className="product-list-content">
                  <h4>
                    <a href="#">On-site Wellness</a>
                  </h4>
                  <p className="small text-muted">Mobile Medical Clinics</p>
                </div>
                <a href="#contact" className="product-list-btn">
                  <i className="far fa-ambulance" />
                </a>
              </div>

              <div className="product-list-item">
                <div className="product-list-img">
                  <a href="#">
                    <img
                      src="/assets/img/product/09.png"
                      alt="Pre-employment"
                    />
                  </a>
                </div>
                <div className="product-list-content">
                  <h4>
                    <a href="#">Fit-for-Work Exams</a>
                  </h4>
                  <p className="small text-muted">Pre/Periodical/Exit Exams</p>
                </div>
                <a href="#contact" className="product-list-btn">
                  <i className="far fa-clipboard-check" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
