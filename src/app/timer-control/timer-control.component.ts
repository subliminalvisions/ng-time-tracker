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
  @Output('OddNum') outputOddNum = new EventEmitter<{currentCount: number}>();
  @Output('EvenNum') outputEvenNum = new EventEmitter<{currentCount: number}>();
  @Output() outputNum = new EventEmitter<{tCount: number}>();
  @Output() emitCount:EventEmitter<any> = new EventEmitter<number>();

  public countArray: number[] = [0];
  public tCount: number = 0;
  public timerActive: boolean = false;
  public timer: ReturnType<typeof setTimeout>;

  constructor() { }

  ngOnInit(): void {
  }
  flipTimerActive() {
    this.timerActive = !this.timerActive;
  }
  startCountUp() {
    this.flipTimerActive();
    this.timer = setInterval(() => {
      this.tCount++;
      this.emitCount.emit(this.tCount); 
    }, 500);
  }
  stopCountUp() {
    this.flipTimerActive();
    clearTimeout(this.timer);
  }
}
