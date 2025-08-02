import express from 'express';
import { check, validationResult } from 'express-validator';
import multer from 'multer';
import nodemailer from 'nodemailer';
import Case from '../models/Case.js';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// Multer configuration for local storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({
  storage,
  limits: { fileSize: 100 * 1024 * 1024 }, 
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|mp3|pdf|wav/;
    const extname = fileTypes.test(file.originalname.toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);
    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'));
    }
  },
});

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// POST /api/cases
router.post(
  '/',
  [
    upload.array('evidence', 5),
    check('clientId').notEmpty().withMessage('Client ID is required'),
    check('caseType')
      .isIn(['Digital Arrest', 'Phishing', 'OTP Scam', 'Investment Fraud', 'Other'])
      .withMessage('Invalid case type'),
    check('description').notEmpty().withMessage('Description is required').isLength({ max: 1000 }).withMessage('Description too long'),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { clientId, caseType, description } = req.body;
      const evidence = req.files ? req.files.map(file => `/uploads/${file.filename}`) : [];

      const newCase = new Case({
        clientId,
        caseType,
        description,
        evidence,
        status: 'Pending',
      });

      await newCase.save();

      // Send confirmation email
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'test@kvm.com', // Placeholder until authentication
        subject: 'Your Case Has Been Received',
        text: `Thank you for submitting your case (${caseType}) to KVM Advocate. We'll review it and contact you soon.`,
      };

      try {
        await transporter.sendMail(mailOptions);
      } catch (emailError) {
        console.error('Email error:', emailError);
      }

      res.status(200).json({ message: 'Case submitted successfully' });
    } catch (error) {
      console.error('Server error:', error);
      res.status(500).json({ message: 'Server error' });
    }
  }
);

export default router;