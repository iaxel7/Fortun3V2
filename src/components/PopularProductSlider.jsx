// src/components/PopularProductsSlider.jsx

import '../assets/css/home.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';


const PopularProductsSlider = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="popular-products">
      <h2>Popular Products</h2>
      <div className="slider-container">
        <button onClick={handlePrev} className="slider-button">‹</button>
        <div className="popular-products-slider">
          {products.map((product, index) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className={`product-item-link ${
                index === currentIndex ? 'active' : ''
              }`}
            >
              <div className="product-item">
                <img src={`http://localhost:8080/${product.image}`} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
        <button onClick={handleNext} className="slider-button">›</button>
      </div>
    </div>
  );
};

export default PopularProductsSlider;
