import { Router } from 'express';

const appointmentsRouter = Router();

appointmentsRouter.get('/', (request, response) =>
  response.json({ message: 'Hello Brother!' })
);

export default appointmentsRouter;
