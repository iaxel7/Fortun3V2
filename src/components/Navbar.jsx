import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../assets/css/shared.css';

const Navbar = () => {
  const { state } = useCart();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">Fortune3</Link>
      <input type="checkbox" id="toggler" />
      <label htmlFor="toggler" className="menu-icon">&#9776;</label>
      <ul className="list menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/cart">Cart ({state.count})</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
