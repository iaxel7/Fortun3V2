import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import '../assets/css/productDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { dispatch } = useCart();

  useEffect(() => {
    console.log('Fetching product with ID:', id); // Log the ID being fetched
    fetch(`https://fortun3v2.onrender.com/api/products/${id}`)
      .then(response => {
        if (!response.ok) {
          console.error(`Network response was not ok: ${response.statusText}`);
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched product:', data);
        setProduct(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART' });
  };

  return (
    <>
      <Navbar />
      <div className="content">
        <div className="product-detail">
          <img src={`https://fortun3v2.onrender.com/${product.image}`} alt={product.title} />
          <div className="product-info">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;