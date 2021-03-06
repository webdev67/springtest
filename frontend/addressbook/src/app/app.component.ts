import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {AllActions, SideNav} from './store/reducer';
import {AppService} from './services/app.service';
import {DialogComponent} from './dialog/dialog.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [AppService]
})
export class AppComponent implements OnInit {
  title = 'addressbook';
  public backendType = 'spring';
  private myStore$;
  public app = {
    name: '',
    age: '',
    hobbies: []
  };
  public persons = [];
  constructor(
    private store: Store<AllActions>,
    private appService: AppService,
    private dialog: MatDialog
  ) {
    this.myStore$ = this.store.select('app-wide');
    this.myStore$.dispatch(new SideNav(true));
    this.myStore$.subscribe(e => {
      console.log(e);
    });
  }

  public doAction() {
    this.myStore$.dispatch(new SideNav(true));
  }

  public ngOnInit() {
    this.persons = [];
    this.appService.getPerson().subscribe(response => {
      console.log(response);
      response.forEach(res => {
        if (res.hobbies) {
          res.hobbies = res.hobbies.split(',');
        }
        this.persons.push(res);
      });
    });
  }

  public doSubmit() {
    console.log(this.app);
    if (this.app.hobbies.toString().length > 0) {
      this.app.hobbies = this.app.hobbies.toString().split(',');
    } else {
      this.app.hobbies = [];
    }
    this.appService.postPerson(this.app).subscribe(e => {
      console.log(e);
      this.ngOnInit();
    });
  }

  public delete(person) {
    console.log(person);
    this.appService.deletePerson(person).subscribe(e => {
      this.ngOnInit();
    });
  }
  public openDialog(person) {
    const dialogRef = this.dialog.open(DialogComponent, {
      height: '600px',
      width: '600px',
      data: person
    }).afterClosed().subscribe(e => {
      if (e && e.hobbies.toString().length > 0) {
        e.hobbies = e.hobbies.toString().split(',');
      } else if (e) {
        e.hobbies = [];
      }
      if (e) {
        this.appService.postPerson(e).subscribe(g => {
          console.log(g);
          this.ngOnInit();
        });
      }
    });
  }
}
