import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TimerControlComponent } from './timer-control/timer-control.component';
import { NumberOddComponent } from './number-odd/number-odd.component';
import { NumberEvenComponent } from './number-even/number-even.component';
import { TimerComponent } from './timer/timer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerControlComponent,
    NumberOddComponent,
    NumberEvenComponent,
    PageNotFoundComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
