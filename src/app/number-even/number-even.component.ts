import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-even',
  templateUrl: './number-even.component.html',
  styleUrls: ['./number-even.component.css']
})
export class NumberEvenComponent implements OnInit {
  @Input() nCount: number;
  staticNum: number;

  constructor() { }

  ngOnInit(): void {
    this.staticNum= this.nCount;
  }

}
