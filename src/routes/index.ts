import Routes from 'express';

const routes = Routes();

routes.post('/users', (request, response) => {
  const { name, email } = request.body;

  const user = {
    name,
    email,
  };

  return response.json(user);
});

routes.get('/', (request, response) =>
  response.json({ message: 'Hell World!' }),
);

export default routes;
