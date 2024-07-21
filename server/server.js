const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config(); // Load environment variables from .env file

// Create an Express application
const app = express();
const PORT = process.env.PORT || 8080; //common port used for web servers

// Create a sql connection with .env file 
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

// Connect to the MySQL
db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('MySQL connected...');
});

// Use CORS to allow requests from different origins
app.use(cors());

// Use body-parser to parse JSON bodies
app.use(bodyParser.json());

// Serve static files from the React app after build 
app.use(express.static(path.join(__dirname, '../public/build')));

// Serve static files (images) from the "uploads" directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Define a route to get all products
app.get('/api/products', (req, res) => {
  const sql = 'SELECT * FROM products';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error fetching products:', err);
      res.status(500).json({ error: 'Failed to fetch products' });
      return;
    }
    res.json(result);
  });
});

// Define a route to get a product by ID
app.get('/api/products/:id', (req, res) => {
  const { id } = req.params;
  console.log(`Fetching product with ID: ${id}`);
  const sql = 'SELECT * FROM products WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Error fetching product:', err);
      res.status(500).json({ error: 'Failed to fetch product' });
      return;
    }
    if (result.length === 0) {
      console.log('Product not found');
      res.status(404).json({ error: 'Product not found' });
      return;
    }
    console.log('Product fetched:', result[0]);
    res.json(result[0]);
  });
});

// Catch-all handler to serve the React app for any request that doesn't match an API route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/build/index.html'));
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
