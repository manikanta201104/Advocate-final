import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/test', (req, res) => {
  res.json({ message: 'Server running' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});