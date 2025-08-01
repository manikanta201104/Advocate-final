import request from 'supertest';
import { app } from '../server.js';

describe('GET /api/test', () => {
  it('returns expected message', async () => {
    const res = await request(app).get('/api/test');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'Server running' });
  });
});
