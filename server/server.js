require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Registration = require('./models/Registration');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB connected'))
    .catch((err) => console.error('❌ MongoDB connection error:', err.message));

// ─── Routes ────────────────────────────────────────────

// POST /api/register — Create a new registration
app.post('/api/register', async (req, res) => {
    try {
        const registration = new Registration(req.body);
        await registration.save();
        res.status(201).json({
            success: true,
            message: 'Registration successful!',
            data: registration,
        });
    } catch (err) {
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map((e) => e.message);
            return res.status(400).json({ success: false, message: messages.join(', ') });
        }
        res.status(500).json({ success: false, message: 'Server error. Please try again.' });
    }
});

// GET /api/registrations — Retrieve all registrations
app.get('/api/registrations', async (req, res) => {
    try {
        const registrations = await Registration.find().sort({ createdAt: -1 });
        res.json({ success: true, count: registrations.length, data: registrations });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server error.' });
    }
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
