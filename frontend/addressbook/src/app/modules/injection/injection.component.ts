import { Component, OnInit } from '@angular/core';
import {RAMI_TOKEN, InjectionService} from '../../services/injection.service';
import {Person} from '../../models/person.model';

@Component({
  selector: 'app-injection',
  templateUrl: './injection.component.html',
  styleUrls: ['./injection.component.scss'],
  providers: [
  InjectionService,
  {
    provide: RAMI_TOKEN, useValue: {name: 'abc', person: new Person('rami', 'mikhail')}
  }]
})
export class InjectionComponent implements OnInit {

  constructor(private injectionService: InjectionService) { }

  ngOnInit() {
    console.log(this.injectionService);
    this.injectionService.value = '123';
  }

}
