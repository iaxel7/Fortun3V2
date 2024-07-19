// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import HeroCarousel from '../components/HeroCarousel.jsx';
import PopularProductsSlider from '../components/PopularProductSlider.jsx';
import '../assets/css/home.css';
import '../assets/css/shared.css';

const Home = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/products')
      .then(response => response.json())
      .then(data => {
        // Select 12 random products
        const shuffled = data.sort(() => 0.12 - Math.random());
        const selected = shuffled.slice(0, 12);
        setPopularProducts(selected);
      });
  }, []);

  return (
    <>
      <Navbar />
      <HeroCarousel />
      <article className="About-Us">
        <div className="article-text">
          <h2>WHO ARE WE?</h2>
          <p>FORTUN3 was founded in Charlotte NC in 2024 by Jorge Axel. His vision was to create a skate shop and clothing brand that brings the world of collecting and trading cards into the world of skating and street-wear. Jorge has always been a fan of the trading card game "Yu-Gi-Oh" and wanted to bring the excitement of finding something rare and valuable to fashion. Every product from FORTUN3 is limited to a specific amount and will never be released again. So don't miss out on our first drop!</p>
        </div>
        <img src="/img/fashionimg.jpg" alt="about us img" />
      </article>
      <PopularProductsSlider products={popularProducts} />
      <Footer />
    </>
  );
};

export default Home;


