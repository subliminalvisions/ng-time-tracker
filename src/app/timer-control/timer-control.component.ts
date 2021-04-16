import { Component, OnInit,
  Output, EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-timer-control',
  templateUrl: './timer-control.component.html',
  styleUrls: ['./timer-control.component.css']
})
export class TimerControlComponent implements OnInit {
  nIntervId: any = {};
  // context: any = {};
  @Output('OddNum') outputOddNum = new EventEmitter<{currentCount: number}>();
  @Output('EvenNum') outputEvenNum = new EventEmitter<{currentCount: number}>();
  
  @Output() outputNum = new EventEmitter<{tCount: number}>();
  @Output() emitCount:EventEmitter<any> = new EventEmitter();

  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();


  public countArray: number[] = [0];
  // public oddArray: number[] = [];
  // public evenArray: number[] = [];

  public tCount: number = 0;
  public interval: any = {};
  public timerActive: boolean = false;

  public timer: ReturnType<typeof setTimeout>;


  constructor() { }

  ngOnInit(): void {
    // this.Count = 0;
    // this.countArray = [0];
    console.log('countArray', this.countArray)
    console.log('arr lenght', this.countArray.length)
  }
  flipTimerActive() {
    this.timerActive = !this.timerActive;
  }

  startCountUp() {
    this.flipTimerActive();
    this.timer = setInterval(() => {
      console.log(this.tCount);
      this.tCount++;
      this.change.emit(this.tCount);
      this.emitCount.emit(this.tCount); 
      // this.outputNum.emit({
      //   Count: this.Count, 
      // });
// // ternary operator
// const result = (this.currentCount % 2  == 0) ? "even" : "odd";
// // display the result
// console.log(`The number is ${result}.`);
    }, 500);
  }
  stopCountUp() {
    this.flipTimerActive();
    clearTimeout(this.timer);
  }
  
  pushNum(count: number) {
  }
  // pushOdd(count: number) {
  //   this.oddArray.push(count);
  //   // outputOddNum, outputEvenNum
  //   this.outputOddNum.emit({
  //     currentCount: count, 
  //   });
  //   console.log('odd', this.oddArray);
  // }
  // pushEven(count: number) {
  //   this.evenArray.push(count);
  //   this.outputEvenNum.emit({
  //     currentCount: count, 
  //   });
  // }
  // onAddBlueprint(nameInput: HTMLInputElement) {
  //   this.blueprintCreated.emit({
  //     serverName: nameInput.value, 
  //     // serverContent: this.newServerContent
  //     serverContent: this.serverContentInput.nativeElement.value
  //   })
  // }

}
