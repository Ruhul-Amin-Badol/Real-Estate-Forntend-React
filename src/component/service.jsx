import React from "react";
import { FcBriefcase } from "react-icons/fc";
import { FcPrivacy } from "react-icons/fc";
import { FcGallery } from "react-icons/fc";

const service = () => {
  return (
    <>
      <div className="container mb-5 mt-5">
        <div className="pt-3 pb-5">
          <p className="text-center card-h ">Other Services</p>
        </div>
        <div className="row card-m">
          <div className="col-4">
              <div class="card-d d-flex">
                <div>
                  <FcBriefcase size={35} />
                </div>
                <div>
                  <h5 class="card-t"> Advanced Property Search</h5>
                  <p class="card-subtitle mb-2 text-muted card-p">
                    Effortlessly find your dream property with advanced search
                    filters.
                  </p>
                </div>
              </div>
            
          </div>
          <div className="col-4">
              <div class="card-d d-flex">
                <div>
                <FcGallery  size={35} />
                </div>
                <div>
                  <h5 class="card-t"> Virtual Tours and Multimedia</h5>
                  <p class="card-subtitle mb-2 text-muted card-p">
                  Explore properties through immersive virtual tours and HD photos.
                  </p>
                </div>
              </div>
            </div>
          <div className="col-4">
              <div class="card-d d-flex">
                <div>
                  <FcPrivacy  size={35} />
                </div>
                <div>
                  <h5 class="card-t"> Secure Online Transactions</h5>
                  <p class="card-subtitle mb-2 text-muted card-p">
                  Ensure secure transactions and e-sign documents seamlessly online.
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default service;
