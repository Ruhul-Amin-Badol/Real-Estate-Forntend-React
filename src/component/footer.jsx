import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import haritage from "../assets/images/haritage.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="footer-main mt-5">
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <Link className="navbar-brand" to="/">
                <img src={haritage} alt="logo" className="navbar-logo" />
              </Link>
              <p className="footer-brand mt-2">
                Design amazing digital experiences that create more happy in the world.
              </p>
            </div>
            <div className="col-lg-8 col-md-6">
              <div className="row">
                <div className="col-6 col-md-4 col-lg-2 mb-4">
                  <ul className="list-unstyled">
                    <li><Link to="/about" className="footer-text">Overview</Link></li>
                    <li><Link to="/services" className="footer-text">Features</Link></li>
                    <li><Link to="/contact" className="footer-text">Solutions</Link></li>
                    <li><Link to="/contact" className="footer-text">Tutorials</Link></li>
                    <li><Link to="/contact" className="footer-text">Pricing</Link></li>
                    <li><Link to="/contact" className="footer-text">Releases</Link></li>
                  </ul>
                </div>
                <div className="col-6 col-md-4 col-lg-2 mb-4">
                  <ul className="list-unstyled">
                    <li><Link to="/blog" className="footer-text">Company</Link></li>
                    <li><Link to="/careers" className="footer-text">About us</Link></li>
                    <li><Link to="/support" className="footer-text">Careers</Link></li>
                    <li><Link to="/support" className="footer-text">Press</Link></li>
                    <li><Link to="/support" className="footer-text">News</Link></li>
                    <li><Link to="/support" className="footer-text">Media kit</Link></li>
                    <li><Link to="/support" className="footer-text">Contact</Link></li>
                  </ul>
                </div>
                <div className="col-6 col-md-4 col-lg-2 mb-4">
                  <ul className="list-unstyled">
                    <li><Link to="/privacy" className="footer-text">Resources</Link></li>
                    <li><Link to="/terms" className="footer-text">Blog</Link></li>
                    <li><Link to="/faq" className="footer-text">FAQ</Link></li>
                    <li><Link to="/faq" className="footer-text">Newsletter</Link></li>
                    <li><Link to="/faq" className="footer-text">Events</Link></li>
                    <li><Link to="/faq" className="footer-text">Help centre</Link></li>
                    <li><Link to="/faq" className="footer-text">Tutorials</Link></li>
                    <li><Link to="/faq" className="footer-text">Overview</Link></li>
                  </ul>
                </div>
                <div className="col-6 col-md-4 col-lg-2 mb-4">
                  <ul className="list-unstyled">
                    <li><Link to="/portfolio" className="footer-text">Portfolio</Link></li>
                    <li><Link to="/testimonials" className="footer-text">Testimonials</Link></li>
                    <li><Link to="/team" className="footer-text">Our Team</Link></li>
                    <li><Link to="/support" className="footer-text">Careers</Link></li>
                    <li><Link to="/support" className="footer-text">Press</Link></li>
                    <li><Link to="/support" className="footer-text">News</Link></li>
                    <li><Link to="/support" className="footer-text">Media kit</Link></li>
                  </ul>
                </div>
                <div className="col-6 col-md-4 col-lg-2 mb-4">
                  <ul className="list-unstyled">
                    <li><Link to="/news" className="footer-text">News</Link></li>
                    <li><Link to="/events" className="footer-text">Events</Link></li>
                    <li><Link to="/resources" className="footer-text">Resources</Link></li>
                    <li><Link to="/support" className="footer-text">Careers</Link></li>
                    <li><Link to="/support" className="footer-text">Press</Link></li>
                    <li><Link to="/support" className="footer-text">News</Link></li>
                    <li><Link to="/support" className="footer-text">Media kit</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="mx-5" />
        <div className="container text-center mt-4">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 text-md-start mb-3 mb-md-0">
              <p className="footer-text">© 2024 CodeStationBD. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <a href="https://facebook.com" className="footer-icon">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" className="footer-icon mx-2">
                <BsTwitterX />
              </a>
              <a href="https://instagram.com" className="footer-icon mx-2">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" className="footer-icon mx-2">
                <FaLinkedinIn />
              </a>
              <a href="https://youtube.com" className="footer-icon mx-2">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
