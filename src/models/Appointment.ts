import { uuid } from 'uuidv4';

class Appointment {
  id: string;

  provider: string;

  date: Date;

  constructor({ provider, date }: Omit<Appointment, 'id'>) {
    this.id = uuid();
    this.provider = provider;
    this.date = date;
  }
}

export default Appointment;

// informando o contructor que ele vai receber um objeto e não mais parâmetros soltos
// ao tipar o objeto passado pro constructor como Appointment, o TS diz que espera receber o id também
// usamos o omit<> pra informar que essa propriedade id não deve ser usada no constructor
// queremos que o controle sobre a geração de ids fique com a lib uuidv4
// o omit recebe dois parâmtros: a classe e a propriedade que vamos omitir
