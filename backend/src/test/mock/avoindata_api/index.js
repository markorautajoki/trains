const nock = require('nock');
const { API_BASE_URL } = require('../../../avoindata_api');

const expectGetLiveTrains = (station) =>
  nock(API_BASE_URL)
    .get('/live-trains')
    .query({ station })
    .replyWithFile(200, __dirname + '/responses/live-trains.json');

const expectGetStationsMetadata = () =>
  nock(API_BASE_URL)
    .get('/metadata/stations')
    .replyWithFile(200, __dirname + '/responses/stations-metadata.json');

module.exports = {
  expectGetLiveTrains,
  expectGetStationsMetadata
}