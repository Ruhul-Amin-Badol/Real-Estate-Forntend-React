import React, { useState } from 'react';
import axios from 'axios';
import { apiserverpoint } from "./apiserverpoint";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState(''); 
    const [success, setSuccess] = useState(''); 
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${apiserverpoint}/api/register`, {
                name,
                email,
                password,
                role
            });
            
            // Handle successful registration, e.g., redirect to login or dashboard
            setSuccess(response.data.message);
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } catch (error) {
            if (error.response && error.response.data) {
                setError(Object.values(error.response.data).join(' ')); // Display the first error message
            } else {
                setError('Registration failed. Please try again.');
            }
        }
    };

    return (
        <div className="container mt-5 primary-text ">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-lg">
                        <div className="card-header text-center">
                            <h2>Register</h2>
                        </div>
                        <div className="card-body">
                        {success && <div className="alert alert-success">{success}</div>} {/* Display success message */}
                        {error && <div className="alert alert-danger">{error}</div>} {/* Display error message */}
                            <form onSubmit={handleRegister}>
                                <div className="form-group mb-3">
                                    <label>Name</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        value={name} 
                                        onChange={(e) => setName(e.target.value)} 
                                        required 
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Email</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)} 
                                        required 
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)} 
                                        required 
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Role</label>
                                    <select 
                                        className="form-select" 
                                        value={role} 
                                        onChange={(e) => setRole(e.target.value)}
                                    >
                                        <option value="admin">Admin</option>
                                        <option value="bidder">Bidder</option>
                                        <option value="property_owner">Property Owner</option>
                                    </select>
                                </div>
                                <p className='text-center '>
                                <button type="submit" className="btn btn-success btn-block w-50 ">
                                    Register
                                </button>
                                </p>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
