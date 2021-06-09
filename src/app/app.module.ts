import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TimerControlComponent } from './timer-control/timer-control.component';

import { TimerComponent } from './timer/timer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TimeSheetComponent } from './time-sheet/time-sheet.component';
import { TimeEntryComponent } from './time-entry/time-entry.component';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { EntryListComponent } from './entries/entry-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule} from './app-routing.module';
import { IntroComponent } from './intro/intro.component';
import { TimeEntryEditComponent } from './time-entry/time-entry-edit/time-entry-edit.component';
import { EntryItemComponent } from './entries/entry-item/entry-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerControlComponent,
    // NumberOddComponent,
    // NumberEvenComponent,
    PageNotFoundComponent,
    TimerComponent,
    TimeSheetComponent,
    TimeEntryComponent,
    EntryFormComponent,
    EntryListComponent,
    HeaderComponent,
    IntroComponent,
    TimeEntryEditComponent,
    EntryItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
