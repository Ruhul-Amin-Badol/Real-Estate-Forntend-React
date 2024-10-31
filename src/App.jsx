import React, { useState, useEffect } from 'react';
import "./assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./component/login";
import Navber from "./component/Navber";
import Hero from "./component/hero";
import PropertyDetails from "./component/PropertyDetails";
import PropertyDetails2 from "./component/PropertyDetails2";
import PropertyDetails3 from "./component/PropertyDetails3";
import Service from "./component/service";
import Footer from "./component/footer";
import Register from "./component/Register";
import Dashboard from "./component/Dashboard";
import About from "./assets/pages/About";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  useEffect(() => {
    const checkAuth = () => setIsAuthenticated(!!localStorage.getItem('token'));
    window.addEventListener("storage", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        <Route
          path="*"
          element={
            <>
              <Navber />
              <Hero />
              <PropertyDetails />
              <PropertyDetails2 />
              <PropertyDetails3 />
              <Service />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
