import React from "react";
import "./assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
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


const App = () => {
  const isAuthenticated = !!localStorage.getItem('token');
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
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
