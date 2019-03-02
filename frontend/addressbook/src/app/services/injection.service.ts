import {Injectable, InjectionToken, Inject} from '@angular/core';
import {Person} from '../models/person.model';

export const RAMI_TOKEN = new InjectionToken<String>('Configuration');
@Injectable({
  providedIn: 'root'
})
export class InjectionService {
  public myVal;
  constructor(@Inject(RAMI_TOKEN) public something: String) {
    console.log(this.something);
  }
  set value(value) {
    this.myVal = value;
  }
  get value() {
    return this.myVal;
  }
}
