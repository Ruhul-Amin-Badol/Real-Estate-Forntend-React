import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import videoFile from "../assets/video/realstate.mp4";
import FindButton1 from "./FindButton1";

const hero = () => {
  return (
    <>
      <div className="hero-container">
        <video className="hero-video" autoPlay loop muted>
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <p>Your Portal to India's Exquisite Real Estate</p>
          <h6>Seamlessly connecting you to the heartbeat of India's prime properties.</h6>
          <FindButton1/>
        </div>
      </div>
    </>
  );
};

export default hero;
