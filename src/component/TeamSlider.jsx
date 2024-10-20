import React from "react";
import { MdHorizontalRule } from "react-icons/md";
import Productcart1 from "../assets/images/team1.jpg";
import Productcart2 from "../assets/images/team2.jpg";
import Productcart3 from "../assets/images/team4.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TeamSlider = () => {
    const TeamData = [
        {
          id: 1,
          image: Productcart3,
        },
        {
          id: 2,
          image: Productcart1,
        },
        {
          id: 3,
          image: Productcart2,
        },
        
      ];
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };
  return (
    <>
      <div className="mt-5 pt-5">
        <div className="row">
          <div className="col-12">
            <h4 className=" mb-0 mt-0 story-heading">
              <MdHorizontalRule className="text-line" />
              Our Team
            </h4>
            <h2 className="main-heading  mt-0">
              Discover the Faces Behind Our Success
            </h2>
          </div>

    <div className="row">
      <Slider {...settings}>
        {TeamData.map((team) => ( 
          
            <div className="col-4 team-image">
              <img
                src={team.image}
                alt={team.name}
                className="img-fluid mb-0 team-img"
              />
          
            </div>
        
        ))}
      </Slider>
          </div>

        </div>
      </div>
    </>
  );
};
const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", right: "10px" }}
        onClick={onClick}
      />
    );
  };
  
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", left: "0px", zIndex: 1 }}
        onClick={onClick}
      />
    );
  };

export default TeamSlider;
