const chai = require('chai');

const request = require('supertest');
const app = require('../app');
const db = require('../data');

const { expect } = chai;


describe('CRUD API /api/users', () => {
  beforeEach(() => db.reset());

  it('should create a new user', async () => {
    const res = await request(app).post('/api/users').send({ name: 'John' });
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('id');
    expect(res.body.name).to.equal('John');
  });

  it('should get all users', async () => {
    db.create({ name: 'Jane' });
    const res = await request(app).get('/api/users');
    expect(res.status).to.equal(200);
    expect(res.body.length).to.equal(1);
  });

  it('should get user by id', async () => {
    const user = db.create({ name: 'Bob' });
    const res = await request(app).get(`/api/users/${user.id}`);
    expect(res.status).to.equal(200);
    expect(res.body.name).to.equal('Bob');
  });

  it('should return 404 for non-existing user', async () => {
    const res = await request(app).get('/api/users/999');
    expect(res.status).to.equal(404);
  });

  it('should update an existing user', async () => {
    const user = db.create({ name: 'Alice' });
    const res = await request(app).put(`/api/users/${user.id}`).send({ name: 'Alice Updated' });
    expect(res.status).to.equal(200);
    expect(res.body.name).to.equal('Alice Updated');
  });

  it('should delete a user', async () => {
    const user = db.create({ name: 'Mark' });
    const res = await request(app).delete(`/api/users/${user.id}`);
    expect(res.status).to.equal(204);
  });
});


/*

mocha	                Test runner to define and execute test cases
chai	                Assertion library to write human-readable test assertions
supertest	            HTTP testing library to simulate API requests to Express routes
chai-http (optional)	An alternative to Supertest (can test APIs with Chai syntax)
express	            Web framework for Node.js to create the API
nyc (optional)	    Code coverage tool to check how much of the code is tested

nodemon (optional)	    Development tool to automatically restart the server on file changes
*/