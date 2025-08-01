import mongoose from 'mongoose';

const caseSchema = new mongoose.Schema({
  clientId: { type: String, required: true },
  caseType: {
    type: String,
    enum: ['Digital Arrest', 'Phishing', 'OTP Scam', 'Investment Fraud'],
    required: true
  },
  description: { type: String, required: true, maxlength: 1000 },
  evidence: [{ type: String }], // URLs for files, e.g., S3 links
  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Resolved'],
    default: 'Pending'
  }
});

export default mongoose.model('Case', caseSchema);