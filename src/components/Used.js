import React from "react";
import { Link } from "react-router-dom";
import "../styles/Used.css";




const UsedCars = () => {
  return (
    <div className="used-container">
      {}
      <header className="hero">
      <img src={`${process.env.PUBLIC_URL}/assets/certified-used-cars.jpg`} alt="Certified Used Cars"  className="used-car-image"/>

        <div className="hero-overlay">
        
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
        Toyota U Trust is set to facilitate Sales, Purchase & Exchange of Toyota and Non Toyota Cars. It allows potential customers an<br/> opportunity to exchange their old cars of any make for a brand new Toyota or a competitively priced used Toyota car. 
        </p>
        <p>
        Used car segment in the country is largely unorganized and with Toyota U Trust we want to ensure our customers gets necessary<br/> choice, convenience and transparency when they buy or sell a used car. 
        </p>
        <p>
        Each car is purchased at fair price and will go through extensive inspection and refurbishment process so that customers get<br/> the best quality cars.
        </p>
        <p>
        When customer purchase Toyota used car at Toyota U Trust they are eligible to obtain certification and warranty offer backed by <br/>Toyota. Along with upto 2 Years/30,000 km warranty offer customer can get upto three labour free services at any Toyota <br/>dealerships.
        </p>
      </div>

      <div className="trust-section">
  {/* Left Section */}
  <div className="trust-left">
    <h2>TOYOTA U TRUST</h2>
  
    <div className="benefits">
      <div className="benefit-box">
        <span className="icon-box">
          <img src="/assets/toyota-icon.png" alt="Toyota Quality" />
        </span>
        <p>Legendary Toyota Quality</p>
      </div>
      <div className="benefit-box">
        <span className="icon-box">
          <img src="/assets/inspection-icon.png" alt="203 Point Inspection" />
        </span>
        <p>203 Point Inspection</p>
      </div>
      <div className="benefit-box">
        <span className="icon-box">
          <img src="/assets/certification-icon.png" alt="Quality Certification" />
        </span>
        <p>Quality Certification by Toyota</p>
      </div>
    </div>
  </div>

  {/* Right Section */}
  <div className="trust-right">
    <div className="warranty">
      <div className="warranty-box">
        <span className="icon-box">
          <img src="/assets/warranty-icon.png" alt="Warranty" />
        </span>
        <p>Up to 2 years / 30,000 Km Warranty*</p>
      </div>
      <div className="warranty-box">
        <span className="icon-box">
          <img src="/assets/dealer-icon.png" alt="Dealer Network" />
        </span>
        <p>Warranty available across Toyota dealer network</p>
      </div>
      <div className="warranty-box">
        <span className="icon-box">
          <img src="/assets/service-icon.png" alt="Free Services" />
        </span>
        <p>Up to 3 free services*</p>
      </div>
    </div>
  </div>
</div>




      {/* Footer */}
      <footer className="footer">
      <div className="footer-contacts">
        <ul>
          <li><Link to="#">CONTACT US</Link></li>
          <li><Link to="#">SEARCH</Link></li>
          <li><Link to="#">ANNOUNCEMENT</Link></li>
          <li><Link to="#">LEGAL NOTICE</Link></li>
          <li><Link to="#">HELP</Link></li>
          <li><Link to="#">SITE MAP</Link></li>
        </ul>
      </div>

      {/* Footer Sections */}
      <div className="footer-content">
        <div>
          <h3>TOP SECTIONS</h3>
          <ul>
            <li><Link to="#">PRICE LIST</Link></li>
            <li><Link to="#">EBOOK</Link></li>
            <li><Link to="#">FIND A DEALER</Link></li>
            <li><Link to="#">TEST DRIVE</Link></li>
            <li><Link to="#">BROCHURE</Link></li>
            <li><Link to="#">EXCHANGE</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>QUICK LINKS</h3>
          <ul>
            <li><Link to="#">ABOUT US</Link></li>
            <li><Link to="#">FEEDBACK/QUERIES</Link></li>
          </ul>
          <h3>MORE</h3>
          <ul>
            <li><Link to="#">HEALTH & SAFETY POLICY</Link></li>
            <li><Link to="#">START YOUR IMPOSSIBLE</Link></li>
          </ul>
        </div>

        <div>
          <h3>MEDIA</h3>
          <ul>
            <li><Link to="#">PRESS RELEASE</Link></li>
            <li><Link to="#">ARTICLES/REVIEWS</Link></li>
            <li><Link to="#">SPOKESPERSONS IMAGES</Link></li>
            <li><Link to="#">CUSTOMER STORIES</Link></li>
            <li><Link to="#">AWARDS</Link></li>
            <li><Link to="#">DREAM CAR CONTEST</Link></li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>FOLLOW TOYOTA</h3>
          <div className="social-icons">
            <Link to="#"><i className="fab fa-x-twitter"></i></Link>
            <Link to="#"><i className="fab fa-facebook-f"></i></Link>
            <Link to="#"><i className="fab fa-youtube"></i></Link>
            <Link to="#"><i className="fab fa-instagram"></i></Link>
          </div>
        </div>
      </div>
        <div className="footer-bottom">
        <Link to="#" className="footer-title">TOYOTA</Link>
    <p className="footer-text">
      &copy; 2000-2025 Toyota Kirloskar Motor. <br /> All Rights Reserved.
    </p>
    <div className="footer-links-container">
    <Link to="#" className="footer-link">
      <img src="/assets/utrust.png" alt="Toyota Trust" />
    </Link>
    <Link to="#" className="footer-link">
      <img src="/assets/part.png" alt="Genuine Parts" />
    </Link>
    <Link to="#" className="footer-link">
      <img src="/assets/financial.png" alt="Financial Services" />
    </Link>
    <Link to="#" className="footer-link">
      <img src="/assets/website.png" alt="Global Website" />
    </Link>

    </div>
  </div>
      </footer>
    </div>
  );
};

export default UsedCars;
