import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-odd',
  templateUrl: './number-odd.component.html',
  styleUrls: ['./number-odd.component.css']
})
export class NumberOddComponent implements OnInit {
  @Input() nCount: number;
  staticNum: number;

  constructor() { }

  ngOnInit(): void {
    this.staticNum= this.nCount;
  }

}
