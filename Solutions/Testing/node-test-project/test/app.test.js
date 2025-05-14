const request = require('supertest');
const app = require('../src/app');
const { expect } = require('chai');

describe('GET /add API', () => {
  it('should return correct sum', async () => {
    const res = await request(app)
      .get('/add')
      .query({ a: 10, b: 5 });

    expect(res.status).to.equal(200);
    expect(res.body.result).to.equal(15);
  });
});
