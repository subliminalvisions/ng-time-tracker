import { Component, Input, OnInit } from '@angular/core';
import { Entry } from '../../entry.model';

@Component({
  selector: 'app-entry-item',
  templateUrl: './entry-item.component.html',
  styleUrls: ['./entry-item.component.css']
})
export class EntryItemComponent implements OnInit {
  @Input() item: Entry;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
