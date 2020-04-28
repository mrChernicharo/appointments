import { Router } from 'express';
import { uuid } from 'uuidv4';
import { startOfHour, parseISO, isEqual } from 'date-fns';

const appointmentsRouter = Router();

// 3. criamos a interface
interface Appointment {
  id: string;
  provider: string;
  date: Date;
}

const appointments: Appointment[] = []; // 4. Daí é informar o tipo dos elementos contidos no array

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parsedDate = startOfHour(parseISO(date));

  // 2. 'appointments' implicity has an 'any[]' type  ==> precisamos dos tipos
  const findAppointmentInSameDate = appointments.find(
    appointment => isEqual(parsedDate, appointment.date) // 1. percorrer cada appointment dentro do array aplicando a function isEqual
  );

  if (findAppointmentInSameDate) {
    return response
      .status(400)
      .json({ message: 'This appointment is already booked' });
  }

  const appointment = {
    id: uuid(),
    provider,
    date: parsedDate, // 5. não esquece de ajeitar o nome "date" pra propriedade. parsedDate é apenas a variável processada na nossa lógica
  };

  appointments.push(appointment);

  return response.json(appointment);
});

export default appointmentsRouter;
