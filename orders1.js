const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// POST request to create a new order
router.post('/', async (req, res) => {
    try {
        const { menuItem, quantity, price, totalPrice } = req.body;
        const newOrder = new Order({ menuItem, quantity, price, totalPrice });
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
