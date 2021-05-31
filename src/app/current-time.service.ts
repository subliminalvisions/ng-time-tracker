import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
// import { next } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentTimeService {
  time = 0;
  // observedTime: Observable<number>;
  // Behaviorime: BehaviorSubject<number>;
  Behaviorime = new BehaviorSubject<number>(0);
  // timeUpdated = new Subject<number>();
  timeUpdated = new BehaviorSubject<number>(0);
  currentTime = new BehaviorSubject<number>(0);


  constructor() {
    this.setTime(0);
    this.getTime();
   }

  setTime(num: number): void {
    this.time = num;
    this.currentTime.next(this.time);
    // this.observedTime = new Observable<number>(observer => {
    //   observer.next(this.time);
    // });
    this.timeUpdated.next(this.time);
    console.log('time', this.time);
    console.log('currentTime,srv,', this.currentTime);
    console.log('timeUpdated', this.timeUpdated);
  }

  getTime(): Observable<number> {
    // this.observedTime = new Observable<number>(observer => {
    //   observer.next(this.time);
    // });

    this.time = this.currentTime.getValue();
    console.log(this.currentTime);
    return this.currentTime;
  }

  // getBehaviorTime(): BehaviorSubject<number> {
  getBehaviorTime() {
    // this.Behaviorime = new BehaviorSubject<number>(observer => {
    //   observer.next(this.time);
    // });
    // this.Behaviorime.next(this.time);
    console.log(this.time);
    // console.log(this.Behaviorime);
    return this.time;
  }
}
