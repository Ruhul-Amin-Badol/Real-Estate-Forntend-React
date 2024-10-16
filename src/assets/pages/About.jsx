import React from "react";
import Navber from "../../component/Navber";
import aboutbanner from "../images/about-banner.jpg";
import NewFlatP from "../../component/NewFlatP";
import NewFlatP2 from "../../component/NewFlatP2";
import Testimonials from "../../component/Testimonials";
import Footer from "../../component/footer";
import productcartimg from "../images/aboutimage1.jpg";
import { MdHorizontalRule } from "react-icons/md";

const About = () => {
  return (
    <>
      <Navber />

      <div className="row">
        <div className="col-12">
          <img src={aboutbanner} alt="hero" className="img-fluid" />
        </div>
      </div>
      <div className="container">
        <div className="row mt-5 ">
          <div className="col-3">
            <NewFlatP/>
          </div>
          <div className="col-3">
            <NewFlatP2 />
          </div>
          <div className="col-3">
            <NewFlatP />
          </div>
          <div className="col-3">
            <NewFlatP2 />
          </div>
        </div>
        <div className="mt-5">
            <div className="row">
               <div className="col-12">
               <section className="home-section">
                <div className="image-wrapper">
                    <img src={productcartimg} alt="House Model" className="house-image" />
                    <div className="text-overlay">
                    {/* <div className="d-flex">
                    <div>
                        <hr className="line-9"></hr>
                        </div>
                        <div className="p-2 property-text">Property buying</div>
                    </div> */}
                    <h4 className="story-heading mb-0 mt-0"><MdHorizontalRule className="text-line"/> Our Story</h4>
                    <h2 className="main-heading mt-0 ">Efficient and Transparent Home Buying Solutions</h2>
                    <p className="description">
                        In the symphony of bustling markets and serene landscapes, Heritage-Nest was born—a vision to...
                    </p>
                    </div>
                </div>
                </section>
               </div>
            </div>
            <br/>
       
        </div>
    
      </div>
      <Testimonials/>
      <Footer />
     
      
    </>
  );
};

export default About;
