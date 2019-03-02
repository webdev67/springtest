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
  private myStore$;
  constructor(private store: Store<AllActions>) {
    this.myStore$ = this.store.select('app-wide');
    this.myStore$.dispatch(new SideNav(true));
    this.myStore$.subscribe(e => {
      console.log(e);
    })
  }

  public doAction() {
    this.myStore$.dispatch(new SideNav('data'));
  }
}
