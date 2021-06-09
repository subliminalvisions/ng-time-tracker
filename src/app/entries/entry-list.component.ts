import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Entry } from '../entry.model';
import { TimeEntriesService } from '../time-entries.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  // TimeEntriesService {
  //   // start as empty
  entries: Entry[] = [];
  subscription: Subscription;

  constructor(public timeEntries: TimeEntriesService) { }

  ngOnInit(): void {

    // subscribe here
    // this.entries = this.timeEntries.entriesArray;
    this.getEntryList();
  }

  getEntryList() {
  //   this.timeEntries.getEntries().subscribe(entries => {
  //       this.entries = entries.json();
  //       console.log(this.entries);
  // });
  this.subscription = this.timeEntries.entriesChanged
  .subscribe(
    (entries: Entry[]) => {
      this.entries = entries;
    }
  );
  // this.recipes = this.recipeService.getRecipes();
  this.entries = this.timeEntries.entriesArray;
  console.log(this.entries);

  }


}
