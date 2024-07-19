// src/components/HeroCarousel.js
import React from 'react';
import '../assets/css/home.css';

const HeroCarousel = () => (
  <div className="hero-carousel">
    <div className="box">
      <span style={{ '--i': 1 }}><img src="/img/skateimg1.jpg" alt="skating image 1" /></span>
      <span style={{ '--i': 2 }}><img src="/img/skateimg2.jpg" alt="skating image 2" /></span>
      <span style={{ '--i': 3 }}><img src="/img/skateimg3.jpg" alt="skating image 3" /></span>
      <span style={{ '--i': 4 }}><img src="/img/skateimg4.jpg" alt="skating image 4" /></span>
      <span style={{ '--i': 5 }}><img src="/img/skateimg5.jpg" alt="skating image 5" /></span>
      <span style={{ '--i': 6 }}><img src="/img/skateimg6.jpg" alt="skating image 6" /></span>
    </div>
  </div>
);

export default HeroCarousel;
