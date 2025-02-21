const express = require('express')
const app = express();

const userRoute = require('./routes/userRoutes');
app.use('/app',userRoute);

module.exports = app;