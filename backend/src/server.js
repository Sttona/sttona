const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Sttona Backend API is running' });
});

// Root endpoint
app.get('/', (req, res) => {
  res.status(200).json({ 
    message: 'Welcome to Sttona API',
    version: '1.0.0',
    docs: '/api/docs'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Sttona Backend API listening on port ${PORT}`);
}); 