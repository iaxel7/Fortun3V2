// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Ensure this file exists
import App from './App';
import reportWebVitals from './reportWebVitals'; // Ensure this file exists
import { CartProvider } from './context/CartContext';

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

