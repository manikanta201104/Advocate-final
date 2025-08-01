import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import User from './models/User.js';
import casesRouter from './routes/cases.js';
import appointmentsRouter from './routes/appointments.js';
import lawyersRouter from './routes/lawyers.js';
import authRouter from './routes/auth.js';

dotenv.config();

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Routes
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

app.use('/api/cases', casesRouter);
app.use('/api/appointments', appointmentsRouter);
app.use('/api/lawyers', lawyersRouter);
app.use('/api/auth', authRouter);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};

if (process.env.NODE_ENV !== 'test') {
  startServer();
}

export { app, startServer };