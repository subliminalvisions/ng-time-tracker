import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Entry } from '../entry.model';
import { CurrentTimeService } from '../current-time.service';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {

  entry: Entry;
  // title: string, desccription: string, hours: number, minutes: number

  SavedTime: number;
  timeSubscription: Subscription;
  timeValue = 0;
  myform: FormGroup;
  subscription: Subscription;

  constructor(private timeService: CurrentTimeService) {}

  ngOnInit() {

    // Move FormBuilder to its own Method
    this.myform = new FormGroup({
      title: new FormControl(),
      time: new FormGroup({
          // hours: new FormControl(),
          // minutes: new FormControl(),
          seconds: new FormControl(),
          milliseconds: new FormControl(),
        }),
      number: new FormControl(this.timeValue),
      description: new FormControl()
    });
    this.loadTimeValue();
  }

  loadTimeValue() {
    this.subscription = this.timeService.timeUpdated
    .subscribe(
      (data: number) => {
        this.timeValue = data;
        this.myform.value.number = data;
      }
    );
  }

  logForm() {
    // this.myform.value.number = this.timeService.getTime();
    this.loadTimeValue();
    console.log('this.myform.num', this.myform.value.number);
    console.log('this.myform', this.myform.value.time);
  }

}
