import React from "react";
import Navber from "./Navber";
import Footer from "./footer";
import result from "../assets/images/result.jpg"

import Testimonials from "./Testimonials";

const BuyerSearchResult = () => {
  return (
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
                <img src={result} alt="hero"  />
            </div>
            <div className="col-9">
                <div className="d-flex primary-text">
                    <div>
                        <p>3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi</p>
                        <p>Meadowshire Park, Greenfield, USA</p>
                    </div>
                    <div>
                        <p className="primary-text fw-blod">$300000</p>
                         <button className="btn btn-info">
                            Bit Property
                         </button>
                    </div>
                </div>
                <div >
                    <div>Property details</div>
                    <div className="d-flex">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                    </div>
                    
                </div>
            </div>
         </div>
      </div>
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default BuyerSearchResult;
