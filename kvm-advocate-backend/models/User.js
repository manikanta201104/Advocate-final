import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['client', 'lawyer', 'admin'],
      default: 'client',
    },
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);