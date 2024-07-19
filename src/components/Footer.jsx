// src/components/Footer.js
import React from 'react';
import '../assets/css/shared.css';

const Footer = () => (
  <footer>
    <div className="ftrcont">
      <div className="ftrmain">
        <div className="ftrcolumn">
          <h3 className="ftrheading">Follow us on Facebook</h3>
          <a href="https://www.facebook.com/" className="footer-link"><i className="fa-brands fa-facebook"></i></a>
        </div>
        <div className="ftrcolumn">
          <h3 className="ftrheading">Follow us on Instagram</h3>
          <a href="https://www.instagram.com/" className="footer-link"><i className="fa-brands fa-instagram"></i></a>
        </div>
        <div className="ftrcolumn">
          <h3 className="ftrheading">Follow us on TikTok</h3>
          <a href="https://www.tiktok.com/explore" className="footer-link"><i className="fa-brands fa-tiktok"></i></a>
        </div>
      </div>
      <div className="ftrbottom">
        <span className="copyright">&copy; 2024 FORTUN3</span>
      </div>
    </div>
  </footer>
);

export default Footer;
