import React from 'react'
import Testimonial1 from "../assets/images/testimonial1.jpg";
import Productcart3 from "../assets/images/prductcart3.jpg";
import { PiRectangleFill } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { BiSolidImage } from "react-icons/bi";
import { MdGrade,MdOutlineGrade } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
    const settings = {
        dots: true,             // Show pagination dots
        infinite: true,         // Infinite loop for the slider
        speed: 500,             // Transition speed
        slidesToShow: 2,        // Show two slides at a time
        slidesToScroll: 1,      // Scroll one slide per transition
        autoplay: true,         // Enable auto-scrolling
        autoplaySpeed: 3000,    // Set auto-scroll speed to 3 seconds
        pauseOnHover: true,     // Pause autoplay on hover
        arrows: false,          // Hide navigation arrows
      };
    
      const testimonials = [
        {
          id: 1,
          name: "Ruhul Amin",
          position: "Software Engineer",
          feedback:
            "The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel.",
          image: Testimonial1,
          rating: 4,
        },
        {
          id: 2,
          name: "Steve Rogers",
          position: "Creative Director, ABC",
          feedback:
            "Amazing platform, secure and reliable! I trust CypherPlay for all my purchases and travels.",
          image: Productcart3,
          rating: 5,
        },
        {
          id: 3,
          name: "Ruhul Amin",
          position: "Software Engineer",
          feedback:
            "The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel.",
          image: Testimonial1,
          rating: 5,
        },
        
      ];
    
      return (
        <div className="testimonials-section">
          <h2 className="section-title">Testimonials</h2>
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-content">
                  <div className="rating-stars">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="testimonial-feedback">{testimonial.feedback}</p>
                  <div className="testimonial-profile text-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="testimonial-img"
                    />
                    <p className="testimonial-name">{testimonial.name}</p>
                    <p className="testimonial-position">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      );
    };
    
    // Function to Render Stars based on Rating
    const renderStars = (rating) => {
      const fullStars = Math.floor(rating);
      const halfStar = rating % 1 !== 0;
      const totalStars = 5;
    
      return (
        <>
          {Array(fullStars)
            .fill()
            .map((_, i) => (
              <MdGrade key={i} className="star-icon" />
            ))}
          {halfStar && <MdOutlineGrade className="star-icon" />}
          {Array(totalStars - fullStars - (halfStar ? 1 : 0))
            .fill()
            .map((_, i) => (
              <MdGrade key={i + fullStars} className="star-icon empty-star" />
            ))}
        </>
      );
    
      };

export default Testimonials