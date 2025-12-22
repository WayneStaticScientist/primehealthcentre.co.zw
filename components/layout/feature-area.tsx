export const FeatureArea = () => {
  return (
    <div className="feature-area pb-100">
      <div className="container wow fadeInUp" data-wow-delay=".25s">
        <div className="feature-wrap">
          <div className="row g-0">
            {/* Feature 1: Mobile Services (Slide 9) */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fal fa-ambulance" />
                </div>
                <div className="feature-content">
                  <h4>Mobile Clinics</h4>
                  <p>On-site Health Services</p>
                </div>
              </div>
            </div>

            {/* Feature 2: Excellence & Integrity (Slide 3) */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fal fa-shield-check" />
                </div>
                <div className="feature-content">
                  <h4>High Quality</h4>
                  <p>Excellence & Integrity</p>
                </div>
              </div>
            </div>

            {/* Feature 3: Privacy (Slide 3) */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fal fa-user-lock" />
                </div>
                <div className="feature-content">
                  <h4>Confidentiality</h4>
                  <p>Secure Health Records</p>
                </div>
              </div>
            </div>

            {/* Feature 4: Support & Contact (Slide 10) */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fal fa-phone-plus" />
                </div>
                <div className="feature-content">
                  <h4>Expert Support</h4>
                  <p>Calls: 077 824 7413</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
