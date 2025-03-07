import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/toyota_logo.png";
import "../styles/Navbar.css"; // Import the CSS

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="navbar">
      {/* Toyota Logo */}
      <div className="nav-logo">
        <img src={logo} alt="Toyota Logo" />
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        {/* Products Dropdown */}
        <li className="dropdown">
          <button
            className="dropdown-btn"
            onMouseEnter={() => setOpenDropdown("products")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            Products
          </button>

          {openDropdown === "products" && (
            <div
              className="dropdown-content"
              onMouseEnter={() => setOpenDropdown("products")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <div className="dropdown-images">
                <img src="https://source.unsplash.com/140x80/?car" alt="Car 1" />
                <img src="https://source.unsplash.com/140x80/?suv" alt="Car 2" />
              </div>
              <div className="dropdown-links">
                <Link to="/models/suvs">SUVs</Link>
                <Link to="/models/sedans">Sedans</Link>
                <Link to="/models/mpvs">MPVs</Link>
              </div>
            </div>
          )}
        </li>

        {/* Virtual Showroom */}
        <li>
          <Link to="/virtual-showroom">Virtual Showroom</Link>
        </li>

        {/* Service Dropdown */}
        <li className="dropdown">
          <button
            className="dropdown-btn"
            onMouseEnter={() => setOpenDropdown("service")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            Service
          </button>

          {openDropdown === "service" && (
            <div
              className="dropdown-content"
              onMouseEnter={() => setOpenDropdown("service")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <div className="dropdown-links">
                <Link to="/service/maintenance">Maintenance</Link>
                <Link to="/service/repair">Repairs</Link>
                <Link to="/service/warranty">Warranty</Link>
              </div>
            </div>
          )}
        </li>

        {/* T-Care */}
        <li>
          <Link to="/tcare">T-Care</Link>
        </li>

        {/* Used Cars */}
        <li>
          <Link to="/used-cars">Used Cars</Link>
        </li>

        {/* Mobility */}
        <li>
          <Link to="/mobility">Mobility</Link>
        </li>

        {/* Buy Online Dropdown */}
        <li className="dropdown">
          <button
            className="dropdown-btn"
            onMouseEnter={() => setOpenDropdown("buy")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            Buy Online
          </button>

          {openDropdown === "buy" && (
            <div
              className="dropdown-content"
              onMouseEnter={() => setOpenDropdown("buy")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <div className="dropdown-links">
                <Link to="/buy/finance">Finance</Link>
                <Link to="/buy/lease">Lease</Link>
                <Link to="/buy/accessories">Accessories</Link>
              </div>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
