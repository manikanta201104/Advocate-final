import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Lawyer from '../models/Lawyer.js';

dotenv.config();

const insertLawyers = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');

    const lawyers = [
      {
        lawyerId: 'lawyer1',
        name: 'Ravi Sharma',
        specialty: 'Online Fraud Expert',
        availableSlots: ['2025-08-12T09:00:00Z', '2025-08-12T09:30:00Z', '2025-08-12T10:00:00Z'],
      },
      {
        lawyerId: 'lawyer2',
        name: 'Anita Reddy',
        specialty: 'Cybercrime Specialist',
        availableSlots: ['2025-08-12T11:00:00Z', '2025-08-12T11:30:00Z'],
      },
      {
        lawyerId: 'lawyer3',
        name: 'Vikram Patel',
        specialty: 'General',
        availableSlots: ['2025-08-12T14:00:00Z', '2025-08-12T14:30:00Z'],
      },
    ];

    await Lawyer.deleteMany({});
    await Lawyer.insertMany(lawyers);
    console.log('Lawyers inserted');
    process.exit();
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
};

insertLawyers();