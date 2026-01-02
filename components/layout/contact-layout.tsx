import { PHSConstants } from "@/utils/constants";
import React from "react";

export const ContactLayout = () => {
  return (
    <div className="contact-area pt-100 pb-80">
      <div className="container">
        <div className="contact-wrapper">
          <div className="row">
            <div className="col-lg-5">
              <div className="contact-content">
                <div className="row">
                  <div className="col-md-6">
                    <div className="contact-info">
                      <div className="contact-info-icon">
                        <i className="fal fa-map-location-dot" />
                      </div>
                      <div className="contact-info-content">
                        <h5>Office Address</h5>

                        <p>
                          {PHSConstants.addresses.map((data, index) => (
                            <React.Fragment key={index}>
                              <div>{data}</div>
                              {index < PHSConstants.addresses.length - 1 && (
                                <hr />
                              )}
                            </React.Fragment>
                          ))}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-info">
                      <div className="contact-info-icon">
                        <i className="fal fa-headset" />
                      </div>
                      <div className="contact-info-content">
                        <h5>Call Us</h5>
                        {PHSConstants.Calls.map((num, idx) => (
                          <p key={idx}>{num}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-info">
                      <div className="contact-info-icon">
                        <i className="fal fa-envelopes" />
                      </div>
                      <div className="contact-info-content">
                        <h5>Email Us</h5>
                        <p>
                          <a href={`mailto:${PHSConstants.Email}`}>
                            {PHSConstants.Email}
                          </a>
                        </p>
                        <p>Whatsapp: {PHSConstants.PhoneNumbers[0]}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-info">
                      <div className="contact-info-icon">
                        <i className="fal fa-alarm-clock" />
                      </div>
                      <div className="contact-info-content">
                        <h5>Open Time</h5>
                        {/* Updated based on Company Profile Page 7 */}
                        <p>Sun - Sun </p>
                        <p>07:30 - 17:30 </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="contact-form">
                <div className="contact-form-header">
                  <h2>Get In Touch</h2>
                  <p>
                    Contact {PHSConstants.COMPANY_NAME} today for expert
                    occupational health services and mobile medical
                    surveillance.
                  </p>
                </div>
                <form method="post" id="contact-form">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Your Email"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Your Subject"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      cols={30}
                      rows={4}
                      className="form-control"
                      placeholder="Write Your Message"
                      required
                    />
                  </div>
                  <button type="submit" className="theme-btn">
                    Send Message <i className="far fa-paper-plane" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
