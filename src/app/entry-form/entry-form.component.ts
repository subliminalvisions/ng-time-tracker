import { AfterViewInit, Component, DoCheck, OnChanges, OnInit } from '@angular/core';
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
export class EntryFormComponent implements OnInit, AfterViewInit {

  entry: Entry;
  // title: string, desccription: string, hours: number, minutes: number

  SavedTime: number;
  timeSubscription: Subscription;
  timeValue: number = 0;
  myform: FormGroup;
  subscription: Subscription;

  constructor(private timeService: CurrentTimeService) {}

  ngOnInit() {
    // this.getTime();
    this.timeValue = this.timeService.getBehaviorTime();
    console.log(this.timeValue);
    // this.timeValue = this.timeService.getBehaviorTime.value;

    // Move FormBuilder to its own Method
    this.myform = new FormGroup({
      title: new FormControl(),
      client: new FormControl(),
      time: new FormGroup({
          // hours: new FormControl(),
          // minutes: new FormControl(),
          seconds: new FormControl(),
          milliseconds: new FormControl(),
        }),
      number: new FormControl(this.timeValue),
      description: new FormControl()
    });

    this.myform.value.number = 222;

    // this.loadTimeValue();
  }
  ngAfterViewInit() {
    this.loadTimeValue();

  }

  loadTimeValue() {

    // this.timeValue = this.timeService.getBehaviorTime();
    this.timeValue = this.timeService.currentTime.value;
    console.log('timeValue,,', this.timeValue);

    this.getTime();
    // this.subscription = this.timeService.timeUpdated
    // .subscribe(
    //   (data: number) => {
    //     console.log('loadTimeValue',data);
    //     this.timeValue = data;
    //     this.myform.value.number = data;
    //   }
    // );
  }
  getTime() {
    this.timeValue = this.timeService.getBehaviorTime();

    this.timeSubscription = this.timeService.currentTime
    .subscribe(
      (data: number) => {
        console.log('getTime',data);
        this.timeValue = data;
        this.myform.value.number = data;
      }
    );
  }
  getTimeBehav() {

  }

  logForm() {
    // this.myform.value.number = this.timeService.getTime();
    this.loadTimeValue();
    console.log('this.myform.num', this.myform.value.number);
    console.log('this.myform', this.myform.value.time);
  }

}
