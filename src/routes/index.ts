import Routes from 'express';

import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';

const routes = Routes();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);

export default routes;
