import { AfterViewInit, Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
import { Entry } from '../entry.model';
import { CurrentTimeService } from '../current-time.service';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { TimeEntriesService } from '../time-entries.service';

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
  timeValue = 0;
  timeFormatted: string;
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  myform: FormGroup;
  subscription: Subscription;

  constructor(
    private timeService: CurrentTimeService,
    private entryService: TimeEntriesService) {}

  ngOnInit() {
    // this.getTime();
    this.timeValue = this.timeService.getBehaviorTime();
    console.log(this.timeValue);
    // this.timeValue = this.timeService.getBehaviorTime.value;

    // Move FormBuilder to its own Method
    this.myform = new FormGroup({
      title: new FormControl(),
      client: new FormControl(),
      description: new FormControl(),
      time: new FormGroup({
          hours: new FormControl(this.hours),
          minutes: new FormControl(this.minutes),
          seconds: new FormControl(this.seconds),
          milliseconds: new FormControl(this.milliseconds),
        }),
      number: new FormControl(this.timeValue),
    });
    this.fillTestValues();
    // this.myform.value.number = 222;
    // this.loadTimeValue();
  }
  convertNumToTime(num: number) {
    this.seconds = (num / 1000);
    this.minutes = (this.seconds / 60);
  }
  msToTime(s: number) {
    const ms = s % 1000;
    s = (s - ms) / 1000;
    const secs = s % 60;
    s = (s - secs) / 60;
    const mins = s % 60;
    const hrs = (s - mins) / 60;
    this.timeFormatted = this.padNum(hrs) + ':' + this.padNum(mins) + ':' + this.padNum(secs);
    return this.timeFormatted;
    // return hrs + ':' + mins + ':' + secs + '.' + ms;
  }


  fillTestValues() {
    this.myform.patchValue({
      title: 'test Value1',
      client: 'viget',
      description: 'descripto test Val lorem ipsum',
      // project: 'firt website',
      // formControlName2: myValue2 (can be omitted)
    });
  }
  ngAfterViewInit() {
    this.loadTimeValue();
  }
  loadTimeValue() {
    // this.timeValue = this.timeService.getBehaviorTime();
    this.getTime();
    this.timeValue = this.timeService.currentTime.value;
    console.log('timeValue,,', this.timeValue);
    // this.subscription = this.timeService.timeUpdated
    // .subscribe(
    //   (data: number) => {
    //     console.log('loadTimeValue',data);
    //     this.timeValue = data;
    //     this.myform.value.number = data;
    //   }
    // );
  }
  padNum(num: number) {
    if (Number(num) < 10) {
      return '0' + num;
    } else {
      return '' + num;
    }
  }
  getTime() {
    this.timeValue = this.timeService.getBehaviorTime();
    this.timeSubscription = this.timeService.currentTime
    .subscribe(
      (data: number) => {
        console.log('getTime',data);
        this.timeValue = data;
        this.myform.value.number = data;
        this.convertNumToTime(this.timeValue);
        this.myform.value.number = this.msToTime(this.timeValue);
      }
    );
  }
  // getTimeBehav() {}

  logForm() {
    // this.myform.value.number = this.timeService.getTime();
    this.loadTimeValue();
    console.log('this.myform.num', this.myform.value.number);
    console.log('this.myform', this.myform.value);
  }
  sendToTimeSheet() {
    this.entry = this.myform.value;
    console.log('this.myform', this.entry);
    this.entryService.addEntry(this.entry);
  }
}
