import React from "react";
import haritage from "../assets/images/haritage.png";
import logo1 from "../assets/images/logo1.png";
import { RiLogoutCircleRLine } from "react-icons/ri";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";

function Navber() {
  const isAuthenticated = !!localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
      <div className="container-fluid p-3  ">
        {/* Logo in the center */}
        <div className="navbar-logo-container d-flex justify-content-center">
          <Link className="navbar-brand" to="/">
            <img src={logo1} alt="logo" className="navbar-logo" />
          </Link>
        </div>

        {/* Toggler for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Left Menu */}
          <ul className="navbar-nav me-auto px-5">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Buy
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productsList">
                Sell
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product-create">
                Service
              </Link>
            </li>
          </ul>

          {/* Right Menu */}
          <ul className="navbar-nav ms-auto px-5">
            <li className="nav-item">
              <Link className="nav-link" to="/productsList">
                Manage Rentals
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            {!isAuthenticated && (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Sign In
                </Link>
              </li>
            )}
            {isAuthenticated && (
              <li className="nav-item py-1 ">
                <span className="px-3 my-2" onClick={handleLogout}>
                <RiLogoutCircleRLine className="logout-icon"/> 
                </span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navber;
