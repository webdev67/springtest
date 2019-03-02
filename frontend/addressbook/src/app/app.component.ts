import { Component, ViewEncapsulation } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {AllActions, SideNav} from './store/reducer';
import {AppService} from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [AppService]
})
export class AppComponent {
  title = 'addressbook';
  private myStore$;
  public app = {
    name: '',
    age: ''
  };
  public persons = [];
  constructor(private store: Store<AllActions>, private appService: AppService) {
    this.myStore$ = this.store.select('app-wide');
    this.myStore$.dispatch(new SideNav(true));
    this.myStore$.subscribe(e => {
      console.log(e);
    });
  }

  public doAction() {
    this.myStore$.dispatch(new SideNav(true));
  }

  public doSubmit() {
    console.log(this.app);
    this.appService.getPerson().subscribe(e => {
      console.log(e);
      this.persons.push(e.response);
    });
  }
}
