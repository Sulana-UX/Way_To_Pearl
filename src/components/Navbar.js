import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/1.2.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
      <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="navbar-links">
        <NavLink to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/things-to-do" activeClassName="active">Things to Do</NavLink>
        <NavLink to="/hotels" activeClassName="active">Hotels</NavLink>
        <NavLink to="/guiders" activeClassName="active">Guiders</NavLink>
        <NavLink to="/rental-cars" activeClassName="active">Rental Cars</NavLink>
        <NavLink to="/admin" activeClassName="active">Admin Dashboard</NavLink>
        <NavLink to="/login" activeClassName="active">
          <button className="login-button">Log In</button>
        </NavLink>
      </div>
      
     
    </nav>
  );
};

export default Navbar;
