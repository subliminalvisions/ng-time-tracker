import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public countArray: number[] = [];
  public oddArray: number[] = [];
  public evenArray: number[] = [];

  // oddArray,  evenArray
  // public currentCount: number = 0;

  // @ViewChild('emitCount', {static: true}) currentCount: number;
  myCount: number = 0;
  
  countChange(event) {
    this.myCount = event;
    this.pushNum(this.myCount);
  }
  pushNum(num: number) {
    if(num % 2  == 0) {this.pushOdd(num)}
    else {this.pushEven(num)}
  }

  pushOdd(count: number) {
    this.oddArray.push(count);
    // outputOddNum, outputEvenNum
    // this.outputOddNum.emit({
    //   currentCount: count, 
    // });
    console.log('odd', this.oddArray);
  }
  pushEven(count: number) {
    this.evenArray.push(count);
    console.log('Even', this.evenArray);

    // this.outputEvenNum.emit({
    //   currentCount: count, 
    // });
  }
  // // ternary operator
// const result = (this.currentCount % 2  == 0) ? "even" : "odd";
// // display the result
// console.log(`The number is ${result}.`);

}
