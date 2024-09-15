import React, { useState } from "react";
import axios from "axios";
import { apiserverpoint } from "./apiserverpoint";
import { useNavigate , Link } from "react-router-dom";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${apiserverpoint}/api/login`, {
        email,
        password,
      }); 
      console.log("Login successful", response.data);
       // Save the token to local storage or state management
      localStorage.setItem('token', response.data.token);
      navigate("/dashboard");
    } catch (error) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="container primary-text ">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5 shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-center">Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {error && <p className="text-danger">{error}</p>}
                <p className="text-center">
                <button type="submit" className="btn btn-info text-light btn-block mt-2 w-50 ">
                  Login
                </button>
                </p>
                <p className="text-center footer-text">Do not have an account? <Link className="footer-text fw-bold" to="/Register">Sign Up</Link></p>
              
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
