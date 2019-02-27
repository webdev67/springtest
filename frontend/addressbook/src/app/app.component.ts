import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {AllActions, SideNav} from './store/reducer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'addressbook';
  constructor(private store: Store<AllActions>) {
    console.log(this.store);
    this.store.dispatch(new SideNav(true));
    this.store.subscribe(e => {
      console.log(e);
    })
  }

  public doAction() {
    this.store.dispatch(new SideNav(true));
  }
}
