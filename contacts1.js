const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST request to create a new contact message
router.post('/', async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;
        const newContact = new Contact({ name, email, phone, message });
        await newContact.save();
        res.status(201).json(newContact);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
