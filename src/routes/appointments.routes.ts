import { Router } from 'express';
import { startOfHour, parseISO } from 'date-fns';

import AppointmentsRepository from '../repositories/appointmentsRepository';

const appointmentsRouter = Router();

const appointments = new AppointmentsRepository();

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parsedDate = startOfHour(parseISO(date));

  // const findAppointmentInSameDate = appointments.find(appointment =>
  //   isEqual(parsedDate, appointment.date)
  // );

  const findAppointmentInSameDate = appointments.findByDate(parsedDate);

  if (findAppointmentInSameDate) {
    return response
      .status(400)
      .json({ message: 'This appointment is already booked' });
  }

  // const appointment = {
  //   id: uuid(),
  //   provider,
  //   date: parsedDate,
  // };

  // const appointment = new Appointment(provider, parsedDate);

  // appointments.push(appointment);

  const appointment = appointments.create(provider, parsedDate);

  return response.json(appointment);
});

export default appointmentsRouter;
