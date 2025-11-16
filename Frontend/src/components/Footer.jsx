// src/components/Footer.jsx
import "./Footer.css";
import React from "react";
export default function Footer(){
  return (
    <footer className="foot">
      <div className="foot-inner">
        <div className="foot-brand">
          <img src="/logo.png" alt="HomeAura" />
          <p>HomeAura helps you plan, design and build beautiful interiors with transparent pricing.</p>
          <div className="apps">
            <a href="#" aria-label="Google Play">📱 Google Play</a>
            <a href="#" aria-label="App Store"> App Store</a>
          </div>
        </div>

        <div>
          <h4>Offerings</h4>
          <a href="#interiors">Interiors</a>
          <a href="#furnish">Furnishings</a>
        </div>

        <div>
          <h4>Get Inspired</h4>
          <a href="#ideas">Design Ideas</a>
          <a href="#journey">The Modular Journey</a>
        </div>

        <div>
          <h4>Company</h4>
          <a href="#about">About us</a>
          <a href="#contact">Contact us</a>
          <a href="#policies">Policies</a>
          <a href="#terms">Terms & conditions</a>
        </div>

        <div>
          <h4>Contact</h4>
          <p>Call us<br/>1800-000-000</p>
          <p>Email us<br/>care@homeaura.com</p>
        </div>
      </div>
      <div className="foot-bottom">© {new Date().getFullYear()} HomeAura. All rights reserved.</div>
    </footer>
  );
}
