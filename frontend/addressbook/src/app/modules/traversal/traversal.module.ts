import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraversalComponent } from './traversal.component';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [{
  path: '',
  component: TraversalComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [TraversalComponent]
})
export class TraversalModule { }
