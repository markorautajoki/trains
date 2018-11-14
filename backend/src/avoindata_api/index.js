const fetch = require('node-fetch');

const API_BASE_URL = 'https://rata.digitraffic.fi/api/v1';

const getLiveTrains = station => fetch(`${API_BASE_URL}/live-trains?station=${station}`).then(res => res.json());

const getStationsMetadata = () => fetch(`${API_BASE_URL}/metadata/stations`).then(res => res.json());

module.exports = {
  getLiveTrains,
  getStationsMetadata,
  API_BASE_URL
}