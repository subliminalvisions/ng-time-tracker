import { Component, OnInit, OnDestroy, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentTimeService } from '../current-time.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})

export class TimerComponent implements OnInit, OnDestroy {
  // OnChanges
  clock: any;
  minutes: any = '00';
  seconds: any = '00';
  milliseconds: any = '00';

  laps: any = [];
  counter: number;
  timerRef;
  running = false;
  startText = 'Start';

  _start = false;
  // @Input() start: boolean;
  @Input() showTimerControls: boolean;

  constructor(
    public timeService: CurrentTimeService,
    private router: Router) {
  }
  // ngOnChanges(changes: SimpleChanges): void {
  //   // console.log(changes['start']);
  //   if (changes['start'].currentValue) {
  //     this.startTimer();
  //   }
  //   else {
  //     this.clearTimer();
  //   }
  // }
  start(){
    this._start = true;
  }
  clear(){
    this._start = false;
  }

  startTimer() {
    this.running = !this.running;
    if (this.running) {
      this.startText = 'Stop';
      const startTime = Date.now() - (this.counter || 0);
      this.timerRef = setInterval(() => {
        this.counter = Date.now() - startTime;
        this.milliseconds = Math.floor(Math.floor(this.counter % 1000) / 10).toFixed(0);
        this.minutes = Math.floor(this.counter / 60000);
        this.seconds = Math.floor(Math.floor(this.counter % 60000) / 1000).toFixed(0);
        if (Number(this.minutes) < 10) {
          this.minutes = '0' + this.minutes;
        } else {
          this.minutes = '' + this.minutes;
        }
        if (Number(this.milliseconds) < 10) {
          this.milliseconds = '0' + this.milliseconds;
        } else {
          this.milliseconds = '' + this.milliseconds;
        }
        if (Number(this.seconds) < 10) {
          this.seconds = '0' + this.seconds;
        } else {
          this.seconds = '' + this.seconds;
        }
      });
    } else {
      this.startText = 'Resume';
      clearInterval(this.timerRef);
    }
  }

  SaveTime() {
    if (this.counter) {
      this.timeService.setTime(this.counter);
    } else {
      console.log('EMPTY, ', this.counter);
    }
    // this.router.navigate(['/new']);
    this.router.navigate(['/entries/new']);
  }

  clearTimer() {
    this.running = false;
    this.startText = 'Start';
    this.counter = undefined;
    this.milliseconds = '00',
    this.seconds = '00',
    this.minutes = '00';
    this.laps = [];
    clearInterval(this.timerRef);
  }

  ngOnDestroy() {
    clearInterval(this.timerRef);
  }
  ngOnInit() {
  }

}
