import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Entry } from '../entry.model';
import { CurrentTimeService } from '../current-time.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit, OnChanges, DoCheck {

  entry: Entry;
  // title: string, desccription: string, hours: number, minutes: number

  SavedTime: number;
  timeSubscription: Subscription;
  timeValue: number = 0;
  myform: FormGroup;

  constructor(private sTime: CurrentTimeService) {}

  // will have to subscribe
  // to time var from CurrentTimeService
  ngOnInit() {
    // this.timeSubscription =
    this.sTime.getTime().subscribe((data) => {
      console.log(data)
      this.timeValue = data;
    });
    // Observable.create((observer) => {
    //   observer = this.sTime.getTime();
    // });
    console.log(this.timeValue)

    // this.sTime.observedTime
    // .subscribe(
    //   (time: number) => {
    //     this.SavedTime = time
    //   }
    // );

    this.myform = new FormGroup({
      title: new FormControl(),
      time: new FormGroup({
          // hours: new FormControl(),
          // minutes: new FormControl(),
          seconds: new FormControl(),
          milliseconds: new FormControl(),
        }),
      number: new FormControl(),
      description: new FormControl()
    });
  }
  ngDoCheck() {
    // console.log('sTime', this.SavedTime);
    // this.myform.time = this.sTime.getTime();
  }
  ngOnChanges() {
    // this.sTime.getTime();
    // this.sTime.observedTime
    // .subscribe(
    //   (time: number) => {
    //     this.SavedTime = time
    //   }
    // );
    console.log('sTime,cc', this.timeValue);
  }
  logForm() {
    this.myform.value.number = this.sTime.getTime();
    console.log('this.myform.num', this.myform.value.number);
    console.log('this.myform', this.myform.value.time);

  }


}
