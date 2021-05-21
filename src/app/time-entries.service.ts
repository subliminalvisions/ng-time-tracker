import { Injectable } from '@angular/core';
import { Entry } from './entry.model';

@Injectable({
  providedIn: 'root'
})
export class TimeEntriesService {

  entriesArray: Entry[];
  // start as empty

  constructor() { }

  addEntry(entry: Entry) {
    console.log(entry);
    this.entriesArray.push(entry);
  }
  getEntries(): Entry[] {
    console.log(this.entriesArray);
    return this.entriesArray;
  }

}
