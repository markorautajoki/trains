const express = require('express');

const trainsService = require('../../service/trains');

const router = express.Router();

router.get('/', async (req, res) =>
  res.json(await trainsService.getTrainsForStation(req.query.station, req.query.category)));

module.exports = router;
