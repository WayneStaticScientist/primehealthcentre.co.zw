export const BigBanner = () => {
  return (
    <div className="big-banner">
      <div className="container wow fadeInUp" data-wow-delay=".25s">
        <div
          className="banner-wrap"
          style={{ backgroundImage: "url(assets/img/banner/big-banner.jpg)" }}
        >
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="banner-content">
                <div className="banner-info">
                  <h6>Our Mission & Vision</h6>
                  <h2>
                    Promoting a Safe and Healthy <span>Work Environment</span>
                  </h2>
                  <p>
                    Combating the risk of work-related injuries while enhancing
                    the well-being and productivity of your workers.
                  </p>
                </div>
                <a href="#about" className="theme-btn">
                  View Company Profile
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
