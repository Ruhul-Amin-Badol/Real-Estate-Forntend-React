import React from "react";
import Navber from "../../component/Navber";
import aboutbanner from "../images/about-banner.jpg";
import NewFlatP from "../../component/NewFlatP";
import NewFlatP2 from "../../component/NewFlatP2";
import Testimonials from "../../component/Testimonials";
import Footer from "../../component/footer";
import productcartimg from "../images/aboutimage1.jpg";
import { MdHorizontalRule } from "react-icons/md";
import TeamSlider from "../../component/TeamSlider";
import Consultation from "../../component/Consultation";

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
            <NewFlatP />
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
                  <img
                    src={productcartimg}
                    alt="House Model"
                    className="house-image"
                  />
                  <div className="text-overlay">
                    <h4 className="story-heading mb-0 mt-0">
                      <MdHorizontalRule className="text-line" /> Our Story
                    </h4>
                    <h2 className="main-heading mt-0 ">
                      Efficient and Transparent Home Buying Solutions
                    </h2>
                    <p className="description">
                      In the symphony of bustling markets and serene landscapes,
                      Heritage-Nest was born—a vision to...
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <br />
        </div>

        <div className="row p-5 mb-5">
          <div className="col-12 d-flex p-5 ">
            <div className="text-card-main">
              <h4 className=" mb-0 mt-0 story-heading">
                <MdHorizontalRule className="text-line" /> Mission Statement
              </h4>
              <h2 className="main-heading  mt-0">
                Efficient and Transparent Home Buying Solutions
              </h2>
              <p className="description">
                To bridge the miles with smiles, Heritage-Nest pledges to be the
                golden thread connecting NRIs to their homeland, through trust,
                transparency, and tailored real estate solutions.
              </p>
            </div>
            <div className="image-card-main ">
              <img src={productcartimg} alt="House Model" />
            </div>
          </div>
        </div>

        <div className="mt-5">
        <TeamSlider/>
        </div>
        <Consultation/>
      </div>
      <Testimonials />
      <Footer />
    </>
  );
};

export default About;
