import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; 
const logo = "/assets/toyota_logo.png";


const carModels = [
  { name: "Glanza", image: "/assets/glanza.jpeg", category: "Cars" },
  { name: "Urban Cruiser Taisor", image: "/assets/glanza.jpeg", category: "Cars" },
  { name: "Rumion", image: "/assets/rumion.jpeg", category: "MPV" },
  { name: "Urban Cruiser Hyryder", image: "/assets/urban_cruiser_hydrader.jpeg", category: "SUV" },
  { name: "Innova Crysta", image: "/assets/Innova_Crysta.jpeg", category: "MPV" },
  { name: "Innova Hycross", image: "/assets/Innova_Hycross.jpeg", category: "MPV" },
  { name: "Hilux", image: "/assets/hilux.jpeg", category: "SUV" },
  { name: "Fortuner", image: "/assets/fortuner.jpeg", category: "SUV" },
  { name: "Legender", image: "/assets/rumion.jpeg", category: "SUV" },
  { name: "Camry", image: "/assets/Innova_Hycross.jpeg", category: "Cars" },
  { name: "Vellfire", image: "/assets/fortuner.jpeg", category: "MPV" },
  { name: "Vellfire", image: "/assets/rumion.jpeg", category: "MPV" },
  
];

const Navbar = () => {
  const [showProducts, setShowProducts] = useState(false);
  const [activeTab, setActiveTab] = useState("All Models");


  const categoryLimits = {
    Cars: 4,
    MPV: 4,
    SUV: 6,
  };
  
  const filterCars = () => {
    if (activeTab === "All Models") {
      return carModels; 
    }
  
    const filteredCars = carModels.filter(car => car.category === activeTab);
  
   
    return filteredCars.slice(0, categoryLimits[activeTab] || filteredCars.length);
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
        <li
          className="dropdown"
          onMouseEnter={() => setShowProducts(true)}
          onMouseLeave={() => setShowProducts(false)}
        >
          <button className="dropdown-btn">
            Models <span className={`arrow ${showProducts ? "rotate" : ""}`}>▼</span>
          </button>

          {showProducts && (
            <div className="mega-menu">
              {/* Tabs for filtering */}
              <div className="mega-menu-tabs">
                {["All Models", "Cars", "MPV", "SUV"].map((tab) => (
                  <button 
                    key={tab} 
                    className={activeTab === tab ? "active" : ""} 
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Car Models Grid */}
              <div className="mega-menu-content">
                {filterCars().map((car) => (
                  <div key={car.name} className="car-card">
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
