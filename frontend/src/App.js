// src/App.js
import React from 'react';
import './App.css';
import Home from './pages/homepage/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login'; // Import your login component
import SignUp from './pages/signup'; // Import your login component
import AdminDashboard from './pages/admin/AdminDash';
import AdminInv from './pages/admin/AdminInventoryForm';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} /> {/* Route for home page */}
        <Route path="/Login" element={<Login />} /> {/* Route for login page */}
        <Route path="/signup" element={<SignUp />} /> {/* Route for signup page */}
        <Route path="/AdminDash" element={<AdminDashboard />} /> {/* Route for signup page */}
        <Route path="/AdminInventoryForm" element={<AdminInv />} />
      </Routes>
    </Router>
  );
}

export default App;