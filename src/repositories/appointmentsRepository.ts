import { isEqual } from 'date-fns';

import Appointment from '../models/Appointment';

interface CreateAppointmentDTO {
  provider: string;
  date: Date;
}
class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public all(): Appointment[] {
    return this.appointments;
  }

  public findByDate(date: Date): Appointment | null {
    const findAppointment = this.appointments.find(appointment =>
      isEqual(date, appointment.date)
    );

    return findAppointment || null;
  }

  public create({ provider, date }: CreateAppointmentDTO): Appointment {
    const appointment = new Appointment({ provider, date });

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;

// persistência <-> repository <-> rota

// no método Create() é melhor usar um objeto (DTO) do que passar parâmetros soltos
// pra fazer isso, é preciso criar uma interface com esse DTO

// após mudar o constructor da classe Appointment lá no model (agora ele espera receber um objeto),
// é preciso adaptar também a passada de parâmetros na hora de instanciar o novo Appointment
//
