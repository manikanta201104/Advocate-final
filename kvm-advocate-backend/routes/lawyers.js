import express from 'express';
import Lawyer from '../models/Lawyer.js';

const router = express.Router();

// GET /api/lawyers/availability - Fetch lawyer availability
router.get('/availability', async (req, res) => {
  try {
    const lawyers = await Lawyer.find({}, 'lawyerId name specialty availableSlots');
    res.status(200).json(lawyers);
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ errors: [{ msg: 'Server error' }] });
  }
});

export default router;