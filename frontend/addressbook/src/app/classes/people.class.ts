import {Person} from '../models/person.model';

export class PeopleClass {
  public person;
  constructor() {
    this.person = new Person('Rami', 'Mikhail');
  }
}
