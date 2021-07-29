import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUser = new AuthenticateUserService();

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });

  // @ts-expect-error The command delete can make the code break at some point, it's been used here to not leak sensitive information.
  delete user.password;

  return response.json({ user, token });
});

export default sessionsRouter;
