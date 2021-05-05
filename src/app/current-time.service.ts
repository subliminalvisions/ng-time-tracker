import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentTimeService {
  time: number;

  constructor() { }

  setTime(num: number):void {
    this.time = num;
    console.log('sTim', this.time);
  }
  getTime():number {
    return this.time;
  }
}
