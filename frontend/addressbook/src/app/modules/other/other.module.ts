import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherComponent } from './other.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: '',
  component: OtherComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OtherComponent]
})
export class OtherModule { }
