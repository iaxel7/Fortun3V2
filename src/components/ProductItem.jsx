import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/product.css';

const ProductItem = ({ id, image, title, price, description }) => (
  <div className="product-item">
    <Link to={`/products/${id}`}>
    <img src={`https://fortun3v2.onrender.com/${image}`} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{price}</p>
    </Link>
  </div>
);

export default ProductItem;
