// app.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/api/test', (req, res) => {
  res.json({ message: 'Server running' });
});

app.post('/api/test-user', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json({ message: 'User saved', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default app;
