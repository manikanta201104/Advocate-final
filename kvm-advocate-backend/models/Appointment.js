import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  appointmentId: { type: String, required: true, unique: true },
  clientId: { type: String, required: true },
  lawyerId: { type: String, required: true },
  time: { type: Date, required: true },
  type: { type: String, enum: ['video', 'in-person'], required: true }
});

export default mongoose.model('Appointment', appointmentSchema);