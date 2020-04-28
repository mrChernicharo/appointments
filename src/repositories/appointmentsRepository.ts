import { isEqual } from 'date-fns';

import Appointment from '../models/Appointment';

class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public findByDate(date: Date): Appointment | null {
    const findAppointment = this.appointments.find(appointment =>
      isEqual(date, appointment.date)
    );

    return findAppointment || null;
  }

  public create(provider: string, date: Date): Appointment {
    const appointment = new Appointment(provider, date);

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;
// persistência <-> repository <-> rota

// o repositório é quem vai buscar e manipular informaçoes dentro do banco

// ele faz isso usando métodos como find, update, delete etc.

// um repositório por Model
