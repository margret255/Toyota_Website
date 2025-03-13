import React from "react";
import { Link } from "react-router-dom";
import "../styles/Used.css";

const Used = () => {
  return (
    <div className="used-container">
      {}
      <header className="hero">
        <img src="/images/hero-bg.jpg" alt="Toyota U Trust" className="hero-image" />
        <div className="hero-overlay">
          <h1 className="hero-title">Toyota U Trust</h1>
          <Link to="#" className="hero-button">CLICK HERE TO SEE USED CAR INVENTORY</Link>
        </div>
      </header>

      {}
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

      {}
      <div className="benefits">
        <div className="benefit-box">
          <span>🚗</span>
          <p>Legendary Toyota Quality</p>
        </div>
        <div className="benefit-box">
          <span>✅</span>
          <p>203 Point Inspection</p>
        </div>
        <div className="benefit-box">
          <span>🔖</span>
          <p>Quality Certification by Toyota</p>
        </div>
      </div>

      {}
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
