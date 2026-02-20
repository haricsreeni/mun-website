const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
  },
  institution: {
    type: String,
    required: [true, 'Institution is required'],
    trim: true,
  },
  delegationType: {
    type: String,
    enum: ['individual', 'institution'],
    required: [true, 'Delegation type is required'],
  },
  committee: {
    type: String,
    enum: ['unsc', 'disec', 'unhrc', 'crisis'],
    required: [true, 'Committee preference is required'],
  },
  delegatesCount: {
    type: Number,
    min: 2,
    default: null,
  },
  experience: {
    type: String,
    enum: ['yes', 'no'],
    default: null,
  },
  accommodation: {
    type: String,
    enum: ['yes', 'no'],
    default: null,
  },
  message: {
    type: String,
    trim: true,
    default: '',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Registration', registrationSchema);
