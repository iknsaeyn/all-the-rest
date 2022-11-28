import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OutputAnArrayComponent } from './output-an-array/output-an-array.component';
import { DatePipeComponent } from './date-pipe/date-pipe.component';
import { PlusFivePipe } from './_Pipes/plus-five.pipe';


@NgModule({
  declarations: [
    AppComponent,
    OutputAnArrayComponent,
    DatePipeComponent,
    PlusFivePipe

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
