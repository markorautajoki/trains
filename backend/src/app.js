const express = require('express');

const trainsRouter = require('./routes/trains');
const stationsRouter = require('./routes/stations');
const healthRouter = require('./routes/health');

const app = express();

app.use('/api/trains', trainsRouter);
app.use('/api/stations', stationsRouter);
app.use('/api/health', healthRouter);

module.exports = app;
