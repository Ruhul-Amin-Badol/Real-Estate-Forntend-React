import React from "react";
import pic3 from "../assets/images/pic3.jpg";
import pic4 from "../assets/images/pic4.jpg";
import FindButton2 from "./FindButton2";

const PropertyDetails3 = () => {
  return (
    <>
      <div className="container-fluid mt-5 mb-5 property-details-container">
        <div className="container">
          <div className="row ">
            <div className="col-6">
              <span>
                <img className="pic1" src={pic3} alt="logo" />
              </span>
              <span>
                <img className="pic2" src={pic4} alt="pic2" />
              </span>
            </div>
            <div className="col-6">
              <div className="d-flex">
                <div>
                  <hr className="line-9"></hr>
                </div>
                <div className="p-2 property-text">Property buying</div>
              </div>
              <p className="property-p">
                Efficient and Transparent Home Buying Solutions
              </p>
              <p className="property-p-sub">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout. 
              </p>
              <FindButton2 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetails3;
