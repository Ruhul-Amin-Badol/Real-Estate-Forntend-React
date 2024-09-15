import React from "react";
import pic5 from "../assets/images/pic5.jpg";
import pic6 from "../assets/images/pic6.jpg";
import FindButton2 from "./FindButton2";

const PropertyDetails2 = () => {
  return (
    <>
      <div className="container-fluid mt-5 mb-5 property-details-container">
        <div className="container">
          <div className="row ">

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
              <FindButton2/>
            </div>
            <div className="col-6">
              <span>
                <img className="pic5" src={pic5} alt="logo" />
              </span>
              <span>
                <img className="pic6" src={pic6} alt="pic2" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetails2;
