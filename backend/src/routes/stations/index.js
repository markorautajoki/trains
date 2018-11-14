const express = require('express');

const stationsService = require('../../service/stations');

const router = express.Router();

router.get('/', async (req, res) =>
  res.json(await stationsService.getStationsList()));

module.exports = router;
