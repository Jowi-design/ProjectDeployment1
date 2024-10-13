const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    menuItem: String,
    quantity: Number,
    price: Number,
    totalPrice: Number,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);
