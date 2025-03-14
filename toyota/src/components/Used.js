import React from "react";
import { Link } from "react-router-dom";
import "../styles/Used.css";

const Used = () => {
  return (
    <div className="used-container">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <img src="/images/hero-bg.jpg" alt="Toyota U Trust" className="hero-image" />
          <div className="hero-overlay">
            <h1 className="hero-title">TOYOTA U TRUST</h1>
            <Link to="#" className="hero-button">
              CLICK HERE TO SEE USED CAR INVENTORY
            </Link>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <div className="content">
        <h2>TOYOTA U TRUST</h2>
        <p>
          Toyota Kirloskar Motors in India started the Toyota U Trust Program in 2007. 
          Our main aim is to provide the used car buyers and sellers an experience at par with a New Car buyer.
        </p>
        <p>
          Each car is purchased at a fair price and goes through extensive inspection 
          and refurbishment so that customers get the best quality cars.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="benefits">
        <div className="benefit-box">
          <img src="/images/toyota-icon.png" alt="Toyota Quality" />
          <p>Legendary Toyota Quality</p>
        </div>
        <div className="benefit-box">
          <img src="/images/inspection-icon.png" alt="Inspection" />
          <p>203 Point Inspection</p>
        </div>
        <div className="benefit-box">
          <img src="/images/certification-icon.png" alt="Certification" />
          <p>Quality Certification by Toyota</p>
        </div>
      </div>

      {/* Warranty Section */}
      <div className="warranty">
        <div className="warranty-box">Up to 2 years / 30,000 Km Warranty*</div>
        <div className="warranty-box">Warranty available across Toyota dealer network</div>
        <div className="warranty-box">Up to 3 free services*</div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="#">About Us</Link></li>
            <li><Link to="#">Feedback</Link></li>
            <li><Link to="#">Health & Safety</Link></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Follow Toyota</h3>
          <Link to="#">Facebook</Link> | <Link to="#">Twitter</Link> | <Link to="#">Instagram</Link>
        </div>
        <p className="footer-text">&copy; 2025 Toyota Kirloskar Motor. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Used;
