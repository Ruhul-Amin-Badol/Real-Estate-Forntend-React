import React from "react";
import Productcart1 from "../assets/images/ProductCart1.jpg";
import Productcart2 from "../assets/images/luxury.jpg";
import Productcart3 from "../assets/images/prductcart3.jpg";
import { PiRectangleFill } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { BiSolidImage } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCart1 = () => {

  const productData = [
    {
      id: 1,
      name: "SunnySlope Suites",
      location: "Meadowshire Park, Greenfield, USA",
      price: "$250000",
      imageCount: 20,
      image: Productcart3,
    },
    {
      id: 2,
      name: "Skyline Apartments",
      location: "Downtown, Greenfield, USA",
      price: "$320000",
      imageCount: 25,
      image: Productcart1,
    },
    {
      id: 3,
      name: "Dream Apartments",
      location: "Downtown, Greenfield, USA",
      price: "$40000",
      imageCount: 25,
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
    <div className="ProductCarousel-main">
      <Slider {...settings}>
        {productData.map((product) => (
          <div key={product.id} className="ProductCart1-main shadow-md">
            <div className="ProductCart-image mb-0">
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid mb-0 ProductCart-img"
              />
              <span className="image-count">
                <BiSolidImage className="icon" /> {product.imageCount}
              </span>
            </div>
            <div className="ProductCart1-main2 mt-0">
              <div className="d-flex justify-content-between">
                <p className="propertycart-text1">
                  <span className="badge">Apartment</span>
                </p>
                <p className="propertycart-text2">
                  <PiRectangleFill className="rectangle" /> Ready To Move
                </p>
              </div>
              <hr className="mx-4 mt-0" />
              <div>
                <p className="productcart-p1 mb-0">{product.name}</p>
                <p className="productcart-p2 mt-0">
                  <CiLocationOn className="icon" /> {product.location}
                </p>
              </div>
              <div>
                <p className="productcart-Budget">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
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

export default ProductCart1;