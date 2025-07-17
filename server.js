require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const itemRoutes = require('./routes/items');
const loggerMiddleware = require('./middlewares/logger');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(loggerMiddleware);


app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Inventory API</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 2rem; }
        h1 { color: #2c3e50; }
        code { background: #f0f0f0; padding: 0.2rem 0.4rem; border-radius: 3px; }
        ul { padding-left: 1.5rem; }
        li { margin: 0.5rem 0; }
        .endpoint { font-weight: bold; color: #367dacff; }
      </style>
    </head>
    <body>
      <h1>Inventory Management API</h1>
      <p>Available endpoints:</p>
      <ul>
        <li><span class="endpoint">GET /health</span> - Check server status</li>
        <li><span class="endpoint">POST /items</span> - Add new inventory item</li>
        <li><span class="endpoint">GET /items</span> - List all inventory items</li>
      </ul>
      <p>Use <code>Content-Type: application/json</code> for POST requests.</p>
    </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.json({ status: 'Server is healthy', timestamp: new Date() });
});

app.use('/items', itemRoutes);


app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});


mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });