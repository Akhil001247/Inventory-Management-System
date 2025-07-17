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
  res.send('Inventory API is Running');
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