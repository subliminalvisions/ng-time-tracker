import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Entry } from '../entry.model';
import { CurrentTimeService } from '../current-time.service';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {

  entry: Entry;
  // title: string, desccription: string, hours: number, minutes: number

  myform: FormGroup;

  // will have to subscribe
  // to time var from CurrentTimeService

  ngOnInit() {
    this.myform = new FormGroup({
      title: new FormControl(),
      time: new FormGroup({
          hours: new FormControl(),
          minutes: new FormControl(),
        }),
      desccription: new FormControl()
    });
  }


}
