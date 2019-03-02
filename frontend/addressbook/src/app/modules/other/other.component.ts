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
  public values = [
    {
      id: 1
    }, {
      id: 2
    }, {
      id: 3
    }, {
      id: 4
    }, {
      id: 5
    }
  ];

  public mapping = {values: [
    {
      id: 11
    }, {
      id: 22
    }, {
      id: 33
    }, {
      id: 44
    }, {
      id: 55
    }
  ]};
  constructor(private injectionService: InjectionService) {
    console.log(this.injectionService);
  }

  ngOnInit() {
    console.log(this.injectionService.value);
    console.log(this.values);
  }
  move(array, from, to) {
    return array.splice(to, 0, array.splice(from, 1)[0]);
  }
  sort(direction) {
    if (direction === 'up') {
      this.values.sort((a, b) => {
        return a > b ? 1 : -1;
      });
      this.mapping.values.sort((a, b) => {
        return a > b ? 1 : -1;
      });
    } else if (direction === 'down') {
      this.values.sort((a, b) => {
        return a < b ? 1 : -1;
      });
      this.mapping.values.sort((a, b) => {
        return a < b ? 1 : -1;
      });
    }
    console.log(this.values);
    console.log(this.mapping);
  }

}
