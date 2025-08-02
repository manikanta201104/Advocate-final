import express from 'express';
import { check, validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

// POST /api/auth/signup - Register a new user
router.post(
  '/signup',
  [
    check('email').isEmail().withMessage('Valid email is required'),
    check('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
    check('role').optional().isIn(['client', 'lawyer', 'admin']).withMessage('Invalid role'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, role = 'client' } = req.body;

    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ errors: [{ msg: 'Email already exists' }] });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ email, password: hashedPassword, role });
      await user.save();

      res.status(200).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Server error:', error);
      res.status(500).json({ errors: [{ msg: 'Server error' }] });
    }
  }
);

// POST /api/auth/login - Login a user
router.post(
  '/login',
  [
    check('email').isEmail().withMessage('Valid email is required'),
    check('password').notEmpty().withMessage('Password is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ errors: [{ msg: 'Invalid credentials' }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ errors: [{ msg: 'Invalid credentials' }] });
      }

      const token = jwt.sign(
        { userId: user._id, email: user.email, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );

      res.status(200).json({ token });
    } catch (error) {
      console.error('Server error:', error);
      res.status(500).json({ errors: [{ msg: 'Server error' }] });
    }
  }
);

// GET /api/test/protected - Test protected route
router.get('/test/protected', async (req, res) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ errors: [{ msg: 'No token provided' }] });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.status(200).json({ message: 'Protected route accessed', user: decoded });
  } catch (error) {
    res.status(401).json({ errors: [{ msg: 'Invalid token' }] });
  }
});

export default router;