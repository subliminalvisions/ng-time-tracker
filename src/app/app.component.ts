import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public oddArray: number[] = [];
  public evenArray: number[] = [];
  public myCount = 0;
  _start = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  start(){
    this._start = true;
  }
  clear(){
    this._start = false;
  }

}
