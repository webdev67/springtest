import { Component, OnInit } from '@angular/core';
import {InjectionService, RAMI_TOKEN} from '../../services/injection.service';
import {PeopleClass} from '../../classes/people.class';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss'],
  providers: [InjectionService, {
    provide: RAMI_TOKEN, useClass: PeopleClass
  }]
})
export class OtherComponent implements OnInit {

  constructor(private injectionService: InjectionService) {
    console.log(this.injectionService);
  }

  ngOnInit() {
    console.log(this.injectionService.value);
  }

}
