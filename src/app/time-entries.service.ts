import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Entry } from './entry.model';

@Injectable({
  providedIn: 'root'
})
export class TimeEntriesService {
  // start as empty
  // entriesArray: Entry[] = [];
  entriesChanged = new Subject<Entry[]>();


  public title: string;
  public minutes: number;
  public hours: number;
  public client: string;
  public project: string;
  public description: string;

  entriesArray: Entry[] = [
        new Entry('First Entry',
          'Time Entry Info Description',
          2,
          15
        ),
        new Entry('Second Entry',
          'Info Description for enty',
          1,
          30
        ),
      ];

  constructor(private router: Router) { }

  addEntry(entry: Entry) {
    console.log(entry);
    this.entriesArray.push(entry);
    this.entriesChanged.next(this.entriesArray.slice());
    console.log(this.entriesArray);
    this.router.navigate(['/entry-list']);

  }
  getEntries(): Entry[] {
    console.log(this.entriesArray);
    return this.entriesArray.slice();
  }

}
