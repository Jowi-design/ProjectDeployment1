const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection
mongoose.connect('mongodb://localhost/restaurant', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
const orderRoutes = require('./routes/orders');
const contactRoutes = require('./routes/contact');

app.use('/api/orders', orderRoutes);
app.use('/api/contact', contactRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
