const request = require('supertest');

const app = require('../../../app');

const { expectGetStationsMetadata } = require('../../mock/avoindata_api');

jest.mock('../../../cache');

describe('GET /api/stations', () => {

  it('responds with stations list', async () => {
    expectGetStationsMetadata();

    const response = await request(app).get('/api/stations');

    expect(response.status).toEqual(200);

    expect(response.body).toEqual([
      { stationName: 'Helsinki', stationShortCode: 'HKI'},
      { stationName: 'Turku', stationShortCode: 'TKU'}]);
  });
});
