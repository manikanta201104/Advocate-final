import express from 'express';
import { check, validationResult } from 'express-validator';
import Appointment from '../models/Appointment.js';
import Lawyer from '../models/Lawyer.js';
import nodemailer from 'nodemailer';

const router = express.Router();

// POST /api/appointments - Create an appointment
router.post(
  '/',
  [
    check('clientId').notEmpty().withMessage('Client ID is required'),
    check('lawyerId').notEmpty().withMessage('Lawyer ID is required'),
    check('time').isISO8601().withMessage('Valid ISO date required'),
    check('type').isIn(['Video', 'In-Person']).withMessage('Invalid consultation type'),
    check('urgency').isIn(['Standard', 'Urgent']).withMessage('Invalid urgency'),
    check('specialty')
      .isIn(['Online Fraud Expert', 'Cybercrime Specialist', 'Data Privacy Lawyer', 'General'])
      .withMessage('Invalid specialty'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { clientId, lawyerId, time, type, urgency, specialty } = req.body;

    try {
      // Check lawyer availability
      const lawyer = await Lawyer.findOne({ lawyerId });
      if (!lawyer) {
        return res.status(400).json({ errors: [{ msg: 'Invalid lawyer ID' }] });
      }

      const timeSlot = new Date(time);
      const workingHoursStart = new Date(timeSlot);
      workingHoursStart.setHours(9, 0, 0, 0);
      const workingHoursEnd = new Date(timeSlot);
      workingHoursEnd.setHours(17, 0, 0, 0);
      const isWeekday = timeSlot.getDay() >= 1 && timeSlot.getDay() <= 6;

      if (!isWeekday || timeSlot < workingHoursStart || timeSlot > workingHoursEnd) {
        return res.status(400).json({ errors: [{ msg: 'Time slot outside working hours' }] });
      }

      const isAvailable = lawyer.availableSlots.includes(time);
      if (!isAvailable) {
        return res.status(400).json({ errors: [{ msg: 'Time slot unavailable' }] });
      }

      // Save appointment
      const appointment = new Appointment({
        clientId,
        lawyerId,
        time,
        type,
        urgency,
        specialty,
        status: 'Pending',
      });
      await appointment.save();

      // Remove booked slot
      lawyer.availableSlots = lawyer.availableSlots.filter((slot) => slot !== time);
      await lawyer.save();

      // Send email confirmation
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'test@kvm.com',
        subject: 'Your Appointment Confirmation',
        text: `Your consultation with ${lawyer.name} is scheduled for ${time}. Type: ${type}, Urgency: ${urgency}.`,
      };

      transporter.sendMail(mailOptions, (error) => {
        if (error) {
          console.error('Email error:', error);
        }
      });

      res.status(200).json({ message: 'Appointment booked successfully' });
    } catch (error) {
      console.error('Server error:', error);
      res.status(500).json({ errors: [{ msg: 'Server error' }] });
    }
  }
);

export default router;