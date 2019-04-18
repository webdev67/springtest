import {
  Component,
  OnInit,
  Inject,
  ViewEncapsulation
} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DialogComponent implements OnInit {
  public app = this.data;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit() {
    console.log(this.app.hobbies);
  }

  public trackByFn(index, item) {
    return index;
  }

  public newHobby() {
    this.app.hobbies.push('');
  }

  public doSubmit() {
    console.log(this.app);
    this.dialogRef.close(this.app);
  }
}
