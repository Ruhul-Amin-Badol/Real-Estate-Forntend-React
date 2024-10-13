import React, { useState, useCallback } from "react";
import Service from "../../component/service";
import PropertySlider from "../../component/PropertySlider";
import Footer from "../../component/footer";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import { LiaBedSolid } from "react-icons/lia";
import { MdOutlineBathtub } from "react-icons/md";
import { MdBalcony } from "react-icons/md";
import { GrCompliance } from "react-icons/gr";
import { CiLocationOn } from "react-icons/ci";
import PropertyDetails1 from "../images/PropertyDetails1.jpg";
import PropertyDetails2 from "../images/PropertyDetails2.jpg";
import PropertyDetails3 from "../images/PropertyDetails3.jpg";
import PropertyDetails4 from "../images/PropertyDetails4.jpg";
import Amenities from "../../component/Amenities";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 37.7749, // Latitude of the center point
  lng: -122.4194, // Longitude of the center point (San Francisco as an example)
};

const PropertyDetails = () => {
  const images = [
    PropertyDetails1,
    PropertyDetails2,
    PropertyDetails3,
    PropertyDetails4,
  ];
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [range, setRange] = useState([280000, 305000]);

  const handleSliderChange = (range) => {
    setRange(range);
  };

  //for map
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDLayODdAzpkh_359vCU4-8ZKw3oWtBvc0", // Replace with your API Key
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

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
            {/* Property details section start */}
                <div className="property-details-card mt-5">
                  <div>
                    <h4>Overviwe</h4>
                  </div>
                  <div className="row primary-text details1 p-2">
                    <div className="col-3"><LiaBedSolid /> 2 Bed</div>
                    <div className="col-3"><MdOutlineBathtub /> 2 Bath</div>
                    <div className="col-3"><MdBalcony /> 2 Belcony</div>
                    <div className="col-3"><GrCompliance/> Fully Furnished</div>
                    <hr className="mb-0 mt-1"/>
                  </div>
                  <div className="row mt-3">
                    <div className="col-3">
                      <p>Carpet Area</p>
                        <h6>2000 sqft</h6>
                      </div>
                    <div className="col-4">
                      <p>Floor</p>
                      <h6>Second (Out of 6th floor)</h6>
                      </div>
                    <div className="col-4">
                      <p>Transaction Type</p>
                      <h6>Ready to move</h6>
                      </div>
                    <div className="col-1">
                      <p>Lift</p>
                      <h6>1</h6>
                      </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-3">
                      <p>Facing</p>
                      <h6>North - East</h6>
                      </div>
                    <div className="col-4">
                      <p>Additional Rooms</p>
                      <h6>1 servant room & 1 gust room</h6>
                      </div>
                    <div className="col-4">
                      <p>Age of construction</p>
                      <h6>New Construction</h6>
                      </div>
                  </div>
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
                    <input
                      type="text"
                      value={`$ ${range[0] / 1000}k`} // Corrected min value display
                      readOnly
                      className="input-field"
                    />
                  </div>

                  <div className="input-group">
                    <label>Max</label>
                    <input
                      type="text"
                      value={`$ ${range[1] / 1000}k`} // Corrected max value display
                      readOnly
                      className="input-field"
                    />
                  </div>

                  {/* Range Slider */}
                  <div className="range-slider">
                    <Slider
                      range
                      min={280000}
                      max={310000}
                      value={range} // Binding the value to state
                      onChange={handleSliderChange}
                      className="range-line"
                      allowCross={false}
                    />
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

              
            <div className="map-value">
              <h5 className="mt-4">Property Location</h5>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={12} // Initial zoom level
                center={center}
              >
                {/* Add Marker for property location */}
                <Marker position={center} />
              </GoogleMap>
            </div>
            </div>

          </div>
          <Amenities/>
          <Service/>
          <PropertySlider/>
          <hr className="mt-5"/>
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default PropertyDetails;
