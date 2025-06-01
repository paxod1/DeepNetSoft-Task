const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./routers/userRouter');
const menuRouter = require('./routers/menuRouter');

dotenv.config();

const app = express();
app.use(express.json());

// CORS configuration
const corsOptions = {
  origin: process.env.Frontend_url,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};
app.use(cors(corsOptions));


// MongoDB connection
mongoose.connect(process.env.MongoUrl)
  .then(() => console.log(' MongoDB Connected'))
  .catch(err => console.error('DB connection error:', err));

// Routes
app.use('/user', userRouter);
app.use('/menu', menuRouter);

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
