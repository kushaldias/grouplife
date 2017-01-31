import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'ng2-datepicker';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule,HttpModule, FormsModule, DatePickerModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
