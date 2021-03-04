const app = require('../app');
const request = require('supertest');


test('/api/test should receive a message "You have hit this end point!"', async () => {
    const res = await request(app).get('/api/test');

    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toBe('You have hit this end point!');
});

test('/api/added should receive a message "Added route has been deployed by GitHub actions!"', async () => {
    const res = await request(app).get('/api/added');

    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toBe('Added route has been deployed by GitHub actions!');
});

test('/api/fail should receive a message "You have failed"', async () => {
    const res = await request(app).get('/api/fail');

    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toBe('You have failed :(');
    expect(res.status).toBe(200);
});

test('/api/another should receive a message "Yet another route that won\'t be deployed due to failing test"', async () => {
    const res = await request(app).get('/api/another');

    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toBe('Yet another route that won\'t be deployed due to failing test');
});