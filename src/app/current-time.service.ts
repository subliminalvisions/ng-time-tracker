import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
// import { next } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentTimeService {
  time = 0;
  observedTime: Observable<number>;
  timeUpdated = new Subject<number>();


  constructor() { this.setTime(0); }

  setTime(num: number): void {
    this.time = num;

    this.observedTime = new Observable<number>(observer => {
      observer.next(this.time);
    });
    this.timeUpdated.next(this.time);
    console.log('time', this.time);
  }
  getTime(): Observable<number> {
    this.observedTime = new Observable<number>(observer => {
      observer.next(this.time);
    });
    return this.observedTime;
  }
}
