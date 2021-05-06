import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
// import { next } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentTimeService {
  time: number = 0;
  observedTime: Observable<number>;

  constructor() { this.setTime(0); }

  setTime(num: number):void {
    this.time = num;
    // this.observedTime = num;
    // this.observedTime = new Observable<number>(observer => {
    //   // let watchNum: number;
    //   observer.next(num);
    // });
    this.observedTime = new Observable<number>(observer => {
      observer.next(this.time);
      // setTimeout(() => {
      // }, 100);
    });
    console.log('time', this.time);
    // console.log('sTim', this.observedTime);
  }
  getTime():Observable<number> {
    this.observedTime = new Observable<number>(observer => {
      observer.next(this.time);
      // setTimeout(() => {
      // }, 100);
    });
    console.log('time', this.time);

    return this.observedTime;
  }
}
