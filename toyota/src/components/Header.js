import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">TOYOTA</div>
      <nav>
        <ul>
          <li><Link to="/">Models</Link></li>
          <li><Link to="/used-cars">Used Cars</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
