import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { reducer } from './reducers';
import { DialogComponent } from './dialog/dialog.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: 'traversal',
  loadChildren: './modules/traversal/traversal.module#TraversalModule'
}, {
  path: 'injection',
  loadChildren: './modules/injection/injection.module#InjectionModule'
}, {
  path: 'other',
  loadChildren: './modules/other/other.module#OtherModule'
}];

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    StoreModule.forRoot({'app-wide': reducer}),
    StoreDevtoolsModule.instrument(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
