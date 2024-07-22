const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config(); // Load environment variables from .env file

// Create an Express application
const app = express();
const PORT = process.env.PORT || 8080; // Common port used for web servers

// Create a MySQL connection pool using .env file
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 10000, // 10 seconds
  acquireTimeout: 10000, // 10 seconds
});

// Use CORS to allow requests from different origins
app.use(cors());

// Use body-parser to parse JSON bodies
app.use(bodyParser.json());

// Serve static files from the React app after build
app.use(express.static(path.join(__dirname, '../build')));

// Serve static files (images) from the "uploads" directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Define a route to get all products
app.get('/api/products', async (req, res) => {
  const sql = 'SELECT * FROM products';
  try {
    console.log('Fetching all products...');
    const [result] = await pool.query(sql);
    console.log('Products fetched:', result);
    res.json(result);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Define a route to get a product by ID
app.get('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM products WHERE id = ?';
  try {
    console.log(`Fetching product with ID: ${id}`);
    const [result] = await pool.query(sql, [id]);
    if (result.length === 0) {
      console.log('Product not found');
      res.status(404).json({ error: 'Product not found' });
      return;
    }
    console.log('Product fetched:', result[0]);
    res.json(result[0]);
  } catch (err) {
    console.error('Error fetching product:', err);
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

// Catch-all handler to serve the React app for any request that doesn't match an API route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
