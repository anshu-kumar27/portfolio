const express = require('express')
const Errors = require('./middleware/Errors')
const cors = require('cors')
const app = express();
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    }));
const portfolioRoutes = require('./routes/portfolioRoutes');
app.use('/api/v1',portfolioRoutes);

app.use(Errors)

module.exports = app;