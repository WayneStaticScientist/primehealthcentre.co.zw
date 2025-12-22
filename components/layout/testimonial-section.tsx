"use client";
import Carousel from "react-multi-carousel";
import { FaHandHoldingMedical } from "react-icons/fa6";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Bikita Minerals",
    role: "Safety & Health Dept",
    content:
      "Prime Health Centre has been instrumental in ensuring our workforce remains fit-for-purpose. Their mobile medical surveillance is highly efficient and perfectly tailored for our mining site requirements.",
  },
  {
    id: 2,
    name: "Shamva Gold Mine",
    role: "SHEQ Manager",
    content:
      "The professional conduct and expertise in Audiometry and Spirometry screenings provided by Prime Health have significantly improved our compliance standards and overall worker safety across the mine.",
  },
  {
    id: 3,
    name: "Kinsey Construction",
    role: "Operations Director",
    content:
      "Reliable and professional partners. Their on-site medical examinations saved us significant downtime and costs. They are a trusted choice for maintaining high operational health standards in construction.",
  },
  {
    id: 4,
    name: "Gwebi College",
    role: "Administration",
    content:
      "The team at Prime Health handled our staff medicals with extreme confidentiality and excellence. Their diagnostic reporting is clear, concise, and always delivered within our required institutional timeframes.",
  },
];

export const TestimonialSection = () => {
  return (
    <div className="testimonial-area ts-bg py-80">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 mx-auto wow fadeInDown"
            data-wow-delay=".25s"
          >
            <div className="site-heading text-center">
              <span className="site-title-tagline">Testimonials</span>
              <h2 className="site-title text-white">
                What Our Clients Say <span>About Us</span>
              </h2>
            </div>
          </div>
        </div>

        <Carousel
          autoPlay={true}
          autoPlaySpeed={2000}
          infinite={true}
          arrows={false}
          responsive={{
            superLargeDesktop: {
              breakpoint: { max: 4000, min: 3000 },
              items: 4,
            },
            desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
            tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
            mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
          }}
          className="testimonial-slider wow fadeInUp gap-3"
        >
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="testimonial-item m-3">
              <div className="testimonial-author">
                <div className="testimonial-author-img flex items-center justify-center rounded-full p-2">
                  {/* The animation class applied to a wrapper div */}
                  <div className="animate-sweep">
                    <FaHandHoldingMedical size={30} color="white" />
                  </div>
                </div>
                <div className="testimonial-author-info">
                  <h4>{item.name}</h4>
                  <p>{item.role}</p>
                </div>
              </div>
              <div className="testimonial-quote">
                {/* Fixed height or min-height here helps keep cards uniform */}
                <p className="min-h-[100px]">{item.content}</p>
              </div>
              <div className="testimonial-rate">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star" />
                ))}
              </div>
              <div className="testimonial-quote-icon">
                <img src="assets/img/icon/quote.svg" alt="quote" />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
