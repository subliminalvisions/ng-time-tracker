import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // public countArray: number[] = [];
  public oddArray: number[] = [];
  public evenArray: number[] = [];
  public myCount: number = 0;
  _start: boolean=false;

  constructor(){
  }
  // countChange(event) {
  //   this.myCount = event;
  //   this.pushNum(this.myCount);
  // }
  // pushNum(num: number) {
  //   if(num % 2  == 0) {this.pushEven(num)}
  //   else {this.pushOdd(num)}
  // }
  // pushOdd(count: number) {
  //   this.oddArray.push(count);
  //   console.log('odd', this.oddArray);
  // }
  // pushEven(count: number) {
  //   this.evenArray.push(count);
  //   console.log('Even', this.evenArray);
  // }

  ngOnInit(){
  }

  start(){
    this._start=true;
  }
  clear(){
    this._start=false;
  }


}
