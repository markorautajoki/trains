const request = require('supertest');

const app = require('../../../app');

jest.mock('../../../cache');

describe('GET /api/health', () => {
  it('responds 200 ok', async () => {
    const response = await request(app)
      .get('/api/health');

    expect(response.status).toEqual(200);

    expect(response.body).toEqual({ status: 'Ok' });
  });
});
