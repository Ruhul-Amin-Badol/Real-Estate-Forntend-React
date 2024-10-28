import React, { useState } from 'react';
import hero1 from '../../assets/images/hero-pic.jpg';
import { CiSearch, CiLocationOn } from "react-icons/ci";
import { FcHome } from "react-icons/fc";
import { AiOutlineDollarCircle } from "react-icons/ai";
import NewFlatP from '../../component/NewFlatP';
import NewFlatP2 from '../../component/NewFlatP2';
import PropertySlider from '../../component/PropertySlider';
import NewListProduct from '../../component/NewListProduct';
import Testimonials from '../../component/Testimonials';
import Footer from "../../component/footer";
import BuyerSearchResult from './BuyerSearchResult';


const BuyerSearch = () => {
  const [showResults, setShowResults] = useState(false); // State to show/hide results

  // Function to handle button click
  const handleSearchClick = () => {
    setShowResults(true); // Show results when button is clicked
  };
  return (
    <>
    {!showResults ? (
        // Render this part if showResults is false
      <div>
        <div className="row">
          <div className="col-12">
            <img src={hero1} alt="hero" className="img-fluid" />
          </div>
        </div>
        <div className="row justify-content-center mt-4 primary-text">
          <div className="col-8">
            <div className="card mx-auto shadow-lg search-main-card" style={{ marginTop: '-150px' }}>
              <div className="card-body">
                {/* Navbar inside the card */}
                <nav className="navbar navbar-expand-lg  ">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse"  id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item active">
                        <a className="nav-link" href="#">Buy</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Rent</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">PG</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Plot</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Commercial</a>
                      </li>
                    </ul>
                  </div>
                </nav>

                {/* Search Form */}
                <div className="form-group mt-3" style={{ position: 'relative' }}>
                  <span className="findicon" style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)' }}>
                    <CiSearch size={25} />
                  </span>
                  <input
                    className="form-control"
                    id="searchProperties"
                    type="search"
                    placeholder="Search properties"
                    aria-label="Search"
                    style={{
                      paddingLeft: '40px', 
                      borderRadius: '4px',
                    }}
                  />
                </div>

                <div className="mt-3">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <label htmlFor="location" className="mt-2 pb-2 fw-bold">
                          <CiLocationOn style={{ color: '#f06711' }} /> Your Location
                        </label>
                        <div className="input-group custom-select-wrapper">
                          <select
                            className="form-control custom-select-arrow"
                            id="location"
                            style={{
                              backgroundColor: '#ECF5FF',
                              border: 'none',
                              borderRadius: '4px',
                            }}
                          >
                            <option value="">Select location</option>
                            <option value="new-york">New York</option>
                            <option value="los-angeles">Los Angeles</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Property Type Dropdown */}
                    <div className="col-md-4">
                      <div className="form-group">
                        <label htmlFor="propertyType" className="mt-2 pb-2 fw-bold">
                          <FcHome /> Property Type
                        </label>
                        <div className="input-group custom-select-wrapper">
                          <select
                            className="form-control custom-select-arrow"
                            id="propertyType"
                            style={{
                              backgroundColor: '#ECF5FF',
                              border: 'none',
                              borderRadius: '4px',
                            }}
                          >
                            <option value="">Select property type</option>
                            <option value="house">House</option>
                            <option value="apartment">Apartment</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Budget Field */}
                    <div className="col-md-4">
                      <div className="form-group">
                        <label htmlFor="budget" className="mt-2 pb-2 fw-bold">
                          <AiOutlineDollarCircle style={{ color: '#f06711' }} /> Budget
                        </label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            id="budget"
                            placeholder="Enter budget"
                            style={{
                              backgroundColor: '#ECF5FF',
                              border: 'none',
                              borderRadius: '4px',
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a href="#" className="btn w-100 mt-3 text-light"
                 onClick={handleSearchClick}
                 style={{backgroundColor:'#0059B1'}}>
                  <span className="findicon">
                    <CiSearch size={25} />
                  </span>
                  Find Property
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
      <div className="row mt-5">
        <div className="col-sm-12 col-md-6 col-lg-3 mb-3">
          <NewFlatP />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mb-3">
          <NewFlatP2 />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mb-3">
          <NewFlatP />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mb-3">
          <NewFlatP2 />
        </div>
      </div>
    </div>
        <div>
          <PropertySlider/>
          <NewListProduct/>
          <Testimonials/>
          
        </div>
        <Footer />
      </div>

       ) : (
        // Render this part if showResults is true
        <BuyerSearchResult/>
        )}
    </>
  );
};

export default BuyerSearch;
