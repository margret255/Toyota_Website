import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/toyota_logo.png";
import "../styles/Navbar.css";

const carModels = [
  { name: "Glanza", image: "/assets/glanza.jpeg", category: "Cars" },
  { name: "Urban Cruiser Taisor", image: "/images/taisor.png", category: "Cars" },
  { name: "Rumion", image: "/images/rumion.png", category: "MPV" },
  { name: "Urban Cruiser Hyryder", image: "/images/hyryder.png", category: "SUV" },
  { name: "Innova Crysta", image: "/images/innova-crysta.png", category: "MPV" },
  { name: "Innova Hycross", image: "/images/innova-hycross.png", category: "MPV" },
  { name: "Hilux", image: "/images/hilux.png", category: "SUV" },
  { name: "Fortuner", image: "/images/fortuner.png", category: "SUV" },
  { name: "Legender", image: "/images/legender.png", category: "SUV" },
  { name: "Camry", image: "/images/camry.png", category: "Cars" },
  { name: "Vellfire", image: "/images/vellfire.png", category: "MPV" },
  { name: "Land Cruiser 300", image: "/images/land-cruiser-300.png", category: "SUV" }
];

const Navbar = () => {
  const [showProducts, setShowProducts] = useState(false);
  const [activeTab, setActiveTab] = useState("All Models");

  const filterCars = () => {
    if (activeTab === "All Models") return carModels;
    return carModels.filter(car => car.category === activeTab);
  };

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
          <button className="dropdown-btn" onClick={() => setShowProducts(!showProducts)}>
            Products <span className={`arrow ${showProducts ? "rotate" : ""}`}>▼</span>
          </button>

          {showProducts && (
            <div className="mega-menu">
              {/* Tabs for filtering */}
              <div className="mega-menu-tabs">
                {["All Models", "Cars", "MPV", "SUV"].map((tab) => (
                  <button key={tab} className={activeTab === tab ? "active" : ""} onClick={() => setActiveTab(tab)}>
                    {tab}
                  </button>
                ))}
              </div>

              {/* Grid layout for car models */}
              <div className="mega-menu-content">
                {filterCars().map((car, index) => (
                  <div key={index} className="car-card">
                    <img src={car.image} alt={car.name} />
                    <p>{car.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </li>

        {/* Other Navigation Links (UNCHANGED) */}
        <li><Link to="/virtual-showroom">Virtual Showroom</Link></li>
        <li><Link to="/service">Service</Link></li>
        <li><Link to="/t-care">T-Care</Link></li>
        <li><Link to="/used-cars">Used Cars</Link></li>
        <li><Link to="/mobility">Mobility</Link></li>
        <li><Link to="/buy-online">Buy Online</Link></li>
        <li><Link to="/toyota-in-india">Toyota in India</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
