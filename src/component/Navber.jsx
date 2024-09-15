import React from "react";
import haritage from "../assets/images/haritage.png";
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
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate('/login'); // Redirect to the login page
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container">
          <div className="row w-100">
            {/* First column - Left Menu */}
            <div className="col-5 d-flex align-items-center">
              <ul className="navbar-nav">
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
            </div>

            {/* Second column - Logo */}
            <div className="col-2 d-flex justify-content-center align-items-center">
              <Link className="navbar-brand" to="/">
                <img src={haritage} alt="logo" className="navbar-logo" />
              </Link>
            </div>

            {/* Third column - Right Menu */}
            <div className="col-5 d-flex justify-content-end align-items-center">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/productsList">
                    Manage Rentals
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
                <li className="nav-item">
                  <button className="btn btn-danger" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
                 )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navber;
