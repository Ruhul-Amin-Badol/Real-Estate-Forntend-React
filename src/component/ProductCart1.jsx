import React from "react";
import Productcart1 from "../assets/images/ProductCart1.jpg";
import { PiRectangleFill } from "react-icons/pi";
import { CiSearch, CiLocationOn } from "react-icons/ci";

const ProductCart1 = () => {
  return (
    <div className="ProductCart1-main shadow-lg">
      <div className="ProductCart-image mb-0">
        <img src={Productcart1} alt="hero" className="img-fluid mb-0" />
      </div>
      <div className="ProductCart1-main2 mt-0">
        <div className="d-flex justify-content-between">
            <p className="propertycart-text1"><span className="badge ">Apartment</span></p>
            <p className="propertycart-text2"><PiRectangleFill className="rectangle"/> Ready To Move</p>
        </div>
        <hr className="mx-4 mt-0"/>
        <div>
            <p className="productcart-p1 mb-0">SunnySlope Suites</p>
            <p className="productcart-p2 mt-0"><CiLocationOn style={{ color: '#f06711'}} className="text-bold"/> Meadowshire Park, Greenfield, USA</p>
        </div>
        <div>
            <p className='productcart-Budget'>$ 250000</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCart1;
