// http://localhost:3333/appointments

import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter); // use serve pra todos os métodos: get, post, put etc...

export default routes;
