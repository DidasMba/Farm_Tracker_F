import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Ajoutez ici la logique de connexion
        console.log('Logging in...');
    };

    return (
        <div className="container mt-5 ">
            <h1 className="text-center mb-4">Login</h1>
            <form class="col justify-content-center">
                <div className="form-group w-50 ">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group w-50">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div class="col-12">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                    <label class="form-check-label" for="gridCheck">
                        login as Admin
                    </label>
                </div>
            </div>
                <button type="button" className="btn btn-success ">
                    <Link to="/AdminDash" className="text-white">Login</Link>
                </button>
            </form>
                <div className="text-center mt-3">
                    <span>Don't have an account? </span>
                    <Link to="/signup">Sign Up</Link>
                </div>
            </div>
            );
}

            export default Login;

