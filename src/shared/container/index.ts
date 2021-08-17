/* eslint-disable import-helpers/order-imports */
import { container } from 'tsyringe';

import '@modules/users/providers';

import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';
import IAppointmentRepository from '@modules/appointments/repositories/IAppointmentsRepository';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import IUserRepository from '@modules/users/repositories/IUsersRepository';

container.registerSingleton<IAppointmentRepository>(
  'AppointmentsRepository',
  AppointmentsRepository,
);

container.registerSingleton<IUserRepository>(
  'UsersRepository',
  UsersRepository,
);
