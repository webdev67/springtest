import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InjectionComponent } from './injection.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: '',
  component: InjectionComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InjectionComponent]
})
export class InjectionModule { }
