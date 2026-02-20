require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
const Registration = require('./models/Registration');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ─── Routes ────────────────────────────────────────────

// POST /api/register — Create a new registration
app.post('/api/register', async (req, res) => {
    try {
        const registration = await Registration.create(req.body);
        res.status(201).json({
            success: true,
            message: 'Registration successful!',
            data: registration,
        });
    } catch (err) {
        if (err.name === 'SequelizeValidationError' || err.name === 'SequelizeDatabaseError') {
            const messages = err.errors
                ? err.errors.map((e) => e.message)
                : [err.message];
            return res.status(400).json({ success: false, message: messages.join(', ') });
        }
        console.error(err);
        res.status(500).json({ success: false, message: 'Server error. Please try again.' });
    }
});

// GET /api/registrations — Retrieve all registrations
app.get('/api/registrations', async (req, res) => {
    try {
        const registrations = await Registration.findAll({
            order: [['createdAt', 'DESC']],
        });
        res.json({ success: true, count: registrations.length, data: registrations });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server error.' });
    }
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Connect to PostgreSQL & start server
sequelize
    .sync()
    .then(() => {
        console.log('✅ PostgreSQL connected & tables synced');
        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('❌ PostgreSQL connection error:', err.message);
    });
