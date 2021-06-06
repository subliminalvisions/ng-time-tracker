import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Entry } from './entry.model';

@Injectable({
  providedIn: 'root'
})
export class TimeEntriesService {
  // start as empty
  entriesArray: Entry[] = [];
  entriesChanged = new Subject<Entry[]>();

  constructor() { }

  addEntry(entry: Entry) {
    console.log(entry);
    this.entriesArray.push(entry);
    this.entriesChanged.next(this.entriesArray.slice());
    console.log(this.entriesArray);
  }
  getEntries(): Entry[] {
    console.log(this.entriesArray);
    return this.entriesArray.slice();
  }

}
