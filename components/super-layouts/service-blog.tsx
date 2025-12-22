import { PHSConstants } from "@/utils/constants";
import Link from "next/link";

export const ServiceBlogLayout = ({
  descriptions,
  imageBlog,
  title,
  blockquote,
  summary,
  summaryTitle,
}: {
  descriptions?: string[];
  imageBlog?: string;
  title: string;
  blockquote?: string;
  summary?: string;
  summaryTitle?: string;
}) => {
  return (
    <div className="blog-area py-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="blog-single-wrap">
              <div className="blog-single-content">
                <div className="blog-thumb-img">
                  {/* Image showing the Mobile Unit or Digital X-Ray Lab */}
                  <img
                    src={`/assets/img/service/${
                      imageBlog || "mobile-medical-unit.jpg"
                    }`}
                    alt="Mobile Medical Unit"
                  />
                </div>
                <div className="blog-info">
                  <div className="blog-meta">
                    <div className="blog-meta-left">
                      <ul>
                        <li>
                          <i className="far fa-hospital" />
                          <a href="#">Occupational Health</a>
                        </li>
                        <li>
                          <i className="far fa-check-circle" />
                          NSSA Compliant
                        </li>
                        <li>
                          <i className="far fa-shield-check" />
                          Certified Results
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-details">
                    <h3 className="blog-details-title mb-20">{title}</h3>
                    {descriptions &&
                      descriptions.map((desc, index) => (
                        <p className="mb-10" key={index}>
                          {desc}
                        </p>
                      ))}
                    {blockquote && (
                      <blockquote className="blockqoute">
                        {blockquote}
                        <h6 className="blockqoute-author">
                          Prime Health Vision
                        </h6>
                        <i className="far fa-quote-right" />
                      </blockquote>
                    )}
                    {summary && summaryTitle && (
                      <h4 className="mb-20">{summaryTitle}</h4>
                    )}
                    {summary && <p className="mb-20">{summary}</p>}

                    <hr />
                    <div className="blog-details-tags pb-20">
                      <h5>Service Areas :</h5>
                      <ul>
                        <li>
                          <a href="#">Mining</a>
                        </li>
                        <li>
                          <a href="#">Construction</a>
                        </li>
                        <li>
                          <a href="#">Food Industry</a>
                        </li>
                        <li>
                          <a href="#">Manufacturing</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <aside className="sidebar">
              {/* Service Categories */}
              <div className="widget category">
                <h5 className="widget-title">Core Services</h5>
                <div className="category-list">
                  <Link
                    href="/services/medical-surveillance"
                    className="d-flex align-items-center gap-1"
                  >
                    <a className="far fa-arrow-right" />
                    Mobile Surveillance
                  </Link>
                  <Link
                    href="/services/digital-x-ray"
                    className="d-flex align-items-center gap-1"
                  >
                    <a className="far fa-arrow-right" />
                    Digital X-Rays
                  </Link>
                  <Link
                    href="/services/audiometry"
                    className="d-flex align-items-center gap-1"
                  >
                    <a className="far fa-arrow-right" />
                    Audiometry/Spirometry
                  </Link>
                  <Link
                    href="/services/food-handler-exams"
                    className="d-flex align-items-center gap-1"
                  >
                    <a className="far fa-arrow-right" />
                    Food Handler Exams
                  </Link>
                  <Link
                    href="/services/wellness-clinics"
                    className="d-flex align-items-center gap-1"
                  >
                    <a className="far fa-arrow-right" />
                    Wellness Clinics
                  </Link>
                  <Link
                    href="/services/first-aid-training"
                    className="d-flex align-items-center gap-1"
                  >
                    <a className="far fa-arrow-right" />
                    First Aid Training
                  </Link>
                </div>
              </div>

              {/* Operating Hours Widget */}
              <div className="widget search">
                <h5 className="widget-title">Operating Hours</h5>
                <div className="p-3 bg-light rounded">
                  <p className="mb-1">
                    <strong>Sun - Sun:</strong>
                  </p>
                  <p className="mb-0 text-primary">07:30 - 17:30</p>
                  <hr />
                  <p className="small mb-0">
                    Available for emergency on-site deployments.
                  </p>
                </div>
              </div>

              {/* Contact Widget */}
              <div className="widget recent-post">
                <h5 className="widget-title">Quick Contact</h5>
                <div className="recent-post-item">
                  <div className="recent-post-bio">
                    <h6>WhatsApp Support</h6>
                    <span>
                      <i className="fab fa-whatsapp" />{" "}
                      {PHSConstants.PhoneNumbers[0]}
                    </span>
                  </div>
                </div>
                <div className="recent-post-item">
                  <div className="recent-post-bio">
                    <h6>Email Inquiries</h6>
                    <span>
                      <i className="far fa-envelope" /> {PHSConstants.Email}
                    </span>
                  </div>
                </div>
              </div>

              {/* Certification Tags */}
              <div className="widget sidebar-tag">
                <h5 className="widget-title">Compliance</h5>
                <div className="tag-list">
                  <a href="#">NSSA</a>
                  <a href="#">Pneumoconiosis</a>
                  <a href="#">Safety First</a>
                  <a href="#">Occupational Health</a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};
