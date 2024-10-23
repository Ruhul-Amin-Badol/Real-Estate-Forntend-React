import React, { useState } from 'react';
import Footer from "../../component/footer";
import result from "../images/result.jpg"
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { PiSpinnerGap } from "react-icons/pi";
import { RiDragMoveLine } from "react-icons/ri";
import { PiRectangleDashedFill } from "react-icons/pi";

import Testimonials from "../../component/Testimonials";
import HomeLoan from '../../component/HomeLoan';
import PropertyDetails from './PropertyDetails';

const BuyerSearchResult = () => {
  const[showProjectDetails, SetshowProjectDetails] = useState(false);
  const handaleShowProjectDetails =() =>{
    SetshowProjectDetails(true);
  }

  return (
    <>
        {!showProjectDetails ?(
          <div>
        <div className="container">
      <div className="d-flex pt-5">
        <div className="buyerresultbutton m-2 text-light primary-text">
          Property(400)
        </div>
        <div
          className="buyerresultbutton m-2  primary-text"
          style={{ background: "#ECF5FF" }}
        >
          Property2
        </div>
        <div
          className="buyerresultbutton m-2  primary-text"
          style={{ background: "#ECF5FF" }}
        >
          Property3
        </div>
      </div>
      <p className="mt-0">
        <hr  />
      </p>
      <p className="result-text primary-text">400 results for rental</p>
      <div className="result-search-main ">
         <div className="row  result-search-card ">
            <div className="col-3">
                <img src={result} alt="result" />
            </div>
            <div className="col-9">
                <div className="d-flex primary-text ">
                    <div>
                        <p className="result-search-card-p1"
                            onClick={handaleShowProjectDetails}
                            style={{cursor:"pointer"}}
                        >3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi</p>
                        <p className="result-search-card-p2"><CiLocationOn style={{ color: '#f06711' }} />Meadowshire Park, Greenfield, USA</p>
                    </div>
                    <div>
                        <p className="primary-text result-search-card-p3">$300000</p>
                         <button className=" result-search-card-button">
                            Bit Property
                         </button>
                    </div>
                </div>
                <div >
                    <div className="d-flex">
                        <div className="result-search-card-p4">Property details</div>
                        <div><MdOutlineHorizontalRule  className="result-search-card-line"/></div>
                    </div>
                    <div className="d-flex mt-2 row">
                        <div className="d-flex col-4">
                          <div><PiSpinnerGap className="result-search-card-icon1"/></div>
                          <div>
                            <p className="mb-0 result-search-card-icon-p1 px-2">Total Area</p>
                            <p className="mt-0 result-search-card-icon-p2 px-2">891 sqft</p>
                          </div>
                        </div>
                        <div className="d-flex col-4">
                          <div><RiDragMoveLine className="result-search-card-icon1"/></div>
                          <div>
                            <p className="mb-0 result-search-card-icon-p1 px-2">Status</p>
                            <p className="mt-0 result-search-card-icon-p2 px-2">Ready To Move</p>
                          </div>
                        </div>
                        <div className="d-flex col-4">
                          <div><PiRectangleDashedFill className="result-search-card-icon1"/></div>
                          <div>
                            <p className="mb-0 result-search-card-icon-p1 px-2">Total Area</p>
                            <p className="mt-0 result-search-card-icon-p2 px-2">891 sqft</p>
                          </div>
                        </div>
                    </div>
                    
                </div>
            </div>
         </div>
      </div>
      </div>
      <HomeLoan/>
      <Testimonials />
      <Footer />
      </div>
      
        ):(

          <PropertyDetails/>
          
  )}
    </>
  );
};

export default BuyerSearchResult;
