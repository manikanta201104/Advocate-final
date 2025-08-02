import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  clientId: {
    type: String,
    required: true,
  },
  lawyerId: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
  type: {
    type: String,
    enum: ['Video', 'In-Person'],
    required: true,
  },
  urgency: {
    type: String,
    enum: ['Standard', 'Urgent'],
    required: true,
  },
  specialty: {
    type: String,
    enum: ['Online Fraud Expert', 'Cybercrime Specialist', 'Data Privacy Lawyer', 'General'],
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'Confirmed', 'Cancelled'],
    default: 'Pending',
  },
}, { timestamps: true });

export default mongoose.model('Appointment', appointmentSchema);