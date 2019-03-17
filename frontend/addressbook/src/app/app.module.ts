import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { reducer } from './reducers';
import { DialogComponent } from './dialog/dialog.component';
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
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
