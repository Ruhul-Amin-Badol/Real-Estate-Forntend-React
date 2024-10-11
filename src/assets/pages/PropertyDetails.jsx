import React, { useState } from "react";

import { CiLocationOn } from "react-icons/ci";
import PropertyDetails1 from "../images/PropertyDetails1.jpg";
import PropertyDetails2 from "../images/PropertyDetails2.jpg";
import PropertyDetails3 from "../images/PropertyDetails3.jpg";
import PropertyDetails4 from "../images/PropertyDetails4.jpg";

const PropertyDetails = () => {
  const images = [
    PropertyDetails1,
    PropertyDetails2,
    PropertyDetails3,
    PropertyDetails4,
  ];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-8 mt-5">
              <div className="d-flex mb-0">
                <div>
                  <span className="propertydetails-p-1 mb-0">
                    3 BHK Builder Floor for Sale in Site Ram Bazar Hyderabad
                  </span>
                </div>
                <div>
                  <span className="propertydetails-p-2 mx-4 ">$ 300K</span>
                </div>
              </div>
              <div className="mt-0">
                <span className="propertydetails-p-3 ">
                  <CiLocationOn style={{ color: "#f06711" }} />
                  Meadowshire Park, Greenfield, USA
                </span>
              </div>
              <hr />
            </div>
          </div>

          <div className="row">
            <div className="col-8">
              <div className="row">
                <div className="col-12">
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="img-fluid main-image"
                  />
                </div>
              </div>
              <div className="row mt-3">
                {images.map((image, index) => (
                  <div key={index} className="col-3">
                    <img
                      src={image}
                      alt={`Thumbnail ${index}`}
                      className={`img-fluid thumbnail ${
                        selectedImage === image ? "active" : ""
                      }`}
                      onClick={() => setSelectedImage(image)}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="col-4">
              <div className="property-bid-card">
                {/* Property Value Section */}
                <div className="property-value">
                  <h4>Property Value</h4>
                  <h2>$300k - $310k</h2>
                  <p>
                    Your bid cannot be more than 10% of the property's minimum
                    value.
                  </p>
                </div>

                {/* Slider and Inputs */}
                <div className="slider-section">
                  <div className="input-group">
                    <label>Min</label>
                    <input type="text" readOnly className="input-field" />
                  </div>

                  <div className="input-group">
                    <label>Max</label>
                    <input type="text" readOnly className="input-field" />
                  </div>

                  {/* Range Labels */}
                  <div className="range-labels">
                    <span>$280k</span>
                    <span>$305k</span>
                  </div>
                </div>

                {/* Bid Button */}
                <button className="bid-button">Bid Property</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetails;
