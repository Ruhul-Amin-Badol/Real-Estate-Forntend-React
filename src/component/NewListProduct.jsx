import React, { useEffect, useState } from "react";
import Productcart1 from "../assets/images/ProductCart1.jpg";
import Productcart2 from "../assets/images/luxury.jpg";
import Productcart3 from "../assets/images/prductcart3.jpg";
import { PiRectangleFill } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { BiSolidImage } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewListProduct = () => {

  const [sliderKey, setSliderKey] = useState(0);

  useEffect(() => {
    const handleResize = () => setSliderKey((prevKey) => prevKey + 1);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        key:sliderKey,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,  // Set this to 2 to avoid potential conflicts
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
      return (
        <div className="container mt-5">
        <div className="row d-flex  align-items-center">
          {/* Align text to the start of the first column */}
          <div className="col-6 text-start Propertyslide-head-p">
            <p>New Listed Properties</p>
          </div>
          {/* Align text to the end of the second column */}
          <div className="col-6 text-end Propertyslide-link">
            <a href="#">See all properties</a>
          </div>
        </div>
        
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
                    <span className="productcart-Budget">{product.price}</span >
                  </div>
                 
                </div>
              </div>
            ))}
          </Slider>
        </div>
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
}

export default NewListProduct