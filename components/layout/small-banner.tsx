export const SmallBanner = () => {
  return (
    <div className="small-banner pb-100">
      <div className="container wow fadeInUp" data-wow-delay=".25s">
        <div className="row g-4">
          {/* Card 1: Vision Screening */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="banner-item">
              <img
                src="/assets/img/banner/mini-banner-1.jpg"
                alt="Vision Screening"
              />
              <div className="banner-content">
                <p>Diagnostic Services</p>
                <ul>
                  <li>Doctor Consultations</li>
                  <li>Imaging (XRAYS - USS) </li>
                  <li>Echocardiography </li>
                  <li>ECG </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2: Audiometry & Spirometry */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="banner-item">
              <img
                src="/assets/img/banner/mini-banner-2.jpg"
                alt="Audiometry"
              />
              <div className="banner-content">
                <p>Worker Safety</p>
                <ul>
                  <li>Audiometry</li>
                  <li>Vision Screening </li>
                  <li>Spirometry</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 3: X-Ray & Food Handlers */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="banner-item">
              <img
                src="/assets/img/banner/mini-banner-3.jpg"
                alt="Digital X-ray"
              />
              <div className="banner-content">
                <p>Regulatory Compliance</p>
                <ul>
                  <li>Food handling</li>
                  <li>Pneumoconiosis </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
