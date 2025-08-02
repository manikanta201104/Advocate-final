import mongoose from 'mongoose';

const lawyerSchema = new mongoose.Schema({
  lawyerId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  specialty: {
    type: String,
    enum: ['Online Fraud Expert', 'Cybercrime Specialist', 'Data Privacy Lawyer', 'General'],
    required: true,
  },
  availableSlots: {
    type: [String],
    default: [],
  },
}, { timestamps: true });

export default mongoose.model('Lawyer', lawyerSchema);