import { http, HttpResponse } from 'msw';

interface LoginRequestBody {
  username: string;
  password: string;
}

export const handlers = [
  http.get('/api/user', () => {
    return HttpResponse.json({
      id: 1,
      username: 'mock-user',
      email: 'mock@mock.com',
    });
  }),

  http.post('/api/login', async ({ request }) => {
    const body = (await request.json()) as LoginRequestBody;

    if (body.username === 'admin' && body.password === 'password') {
      return HttpResponse.json({ token: 'mock-token' });
    }

    return new HttpResponse('Unauthorized', { status: 401 });
  }),
];
