import React, { useEffect, useState, useCallback } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import ProductItem from '../components/ProductItem.jsx';
import '../assets/css/product.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceFilter, setPriceFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/products')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched products:', data);
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }, []);

  const filterProducts = useCallback(() => {
    let filtered = products;

    if (priceFilter) {
      filtered = filtered.filter(product => product.price === priceFilter);
    }

    if (typeFilter) {
      filtered = filtered.filter(product => product.type === typeFilter);
    }

    setFilteredProducts(filtered);
  }, [priceFilter, typeFilter, products]);

  useEffect(() => {
    filterProducts();
  }, [priceFilter, typeFilter, filterProducts]);

  return (
    <>
      <Navbar />
      <div className = "hcont">
        <div className = "shopnow">Shop Now</div>
      </div>
      <div className="filter-container">
        <div className="filter">
          <label>Filter by Price:</label>
          <select onChange={e => setPriceFilter(e.target.value)} value={priceFilter}>
            <option value="">All</option>
            <option value="$12.99">$12.99</option>
            <option value="$13.99">$13.99</option>
            <option value="$15.99">$15.99</option>
            <option value="$19.99">$19.99</option>
            <option value="$49.99">$49.99</option>
            <option value="$89.99">$89.99</option>
          </select>
        </div>
        <div className="filter">
          <label>Filter by Type:</label>
          <select onChange={e => setTypeFilter(e.target.value)} value={typeFilter}>
            <option value="">All</option>
            <option value="deck">Deck</option>
            <option value="longboard">Longboard</option>
            <option value="truck">Truck</option>
            <option value="wheel">Wheel</option>
            <option value="shirt">Shirt</option>
            <option value="tool">Tool</option>
          </select>
        </div>
      </div>
      <div className="grid-container">
        {filteredProducts.map(product => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Products;


