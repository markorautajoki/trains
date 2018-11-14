const request = require('supertest');

const app = require('../../../app');

const { expectGetLiveTrains, expectGetStationsMetadata } = require('../../mock/avoindata_api');

jest.mock('../../../cache');

describe('GET /api/trains', () => {

  it('responds with trains data for station', async () => {
    const station = 'HKI';
    const category = 'Long-distance';

    expectGetLiveTrains(station);
    expectGetStationsMetadata();

    const response = await request(app).get(`/api/trains?station=${station}&category=${category}`);

    expect(response.status).toEqual(200);

    expect(response.body).toEqual({
      arriving: [
        {
          trainNumber: 1345,
          trainType: 'IC',
          scheduledTime: '2018-11-13T13:31:20.000Z',
          actualTime: '2018-11-13T13:31:20.000Z',
          differenceInMinutes: 0,
          departureStation: 'Turku',
          destinationStation: 'Helsinki'
        }
      ],
      departing: [
        {
          trainNumber: 5431,
          trainType: 'S',
          scheduledTime: '2018-11-13T14:31:20.000Z',
          actualTime: '2018-11-13T14:33:20.000Z',
          differenceInMinutes: 2,
          departureStation: 'Helsinki',
          destinationStation: 'Turku'
        }
      ]
    });
  });
});
