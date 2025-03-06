import React from "react";
import { Link } from "react-router-dom";  // If using React Router
import "../styles/Navbar.css"; // Import CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Toyota</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <button className="menu-btn">☰</button>
    </nav>
  );
};

export default Navbar;
