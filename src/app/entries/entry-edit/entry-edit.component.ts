import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { Entry } from '../../entry.model';

// import { ReactiveFormsModule } from '@angular/forms';
import { CurrentTimeService } from '../../current-time.service';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { TimeEntriesService } from '../../time-entries.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-entry-edit',
  templateUrl: './entry-edit.component.html',
  styleUrls: ['./entry-edit.component.css']
})
export class EntryEditComponent implements OnInit {
  id: number;
  editMode = false;
  ingredientList: [];
  entryForm: FormGroup;
  entry: Entry;

  // title: string, desccription: string, hours: number, minutes: number
  SavedTime: number;
  timeSubscription: Subscription;
  timeValue = 0;
  timeFormatted: string;
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  myform: FormGroup;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private timeService: CurrentTimeService,
    private entryService: TimeEntriesService) {}


    ngOnInit() {
      // this.getTime();

      this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
      this.timeValue = this.timeService.getBehaviorTime();
      console.log(this.timeValue);
      // this.timeValue = this.timeService.getBehaviorTime.value;

      // this.loadTimeValue();
    }
    initForm(): void {
      let entryName = '';
      // let recipeImagePath = '';
      let entryDescription = '';
      // const EntryIngredients = new FormArray([]);

      if (this.editMode) {
        const entry = this.entryService.getEntrybyID(this.id);
        console.log(entry);
        entryName = entry.title;
        entryDescription = entry.description;
      }
      this.myform = new FormGroup({
        title: new FormControl(entryName, [Validators.required]),
        client: new FormControl(),
        description: new FormControl(entryDescription, [Validators.required]),
        time: new FormGroup({
          // patch time values from entryService.getEntrybyID(this.id)
            hours: new FormControl(this.hours),
            minutes: new FormControl(this.minutes),
            seconds: new FormControl(this.seconds),
            // milliseconds: new FormControl(this.milliseconds),
          }),
        number: new FormControl(this.timeValue),
      });
      this.loadTimeValue();
    }

    // updateEntry(index: number, newEntry: Entry): void {

    // instantiateFormGroup() {
    //   console.log('test instantiate G');
    // }


    convertNumToTime(num: number) {
      this.seconds = (num / 1000);
      this.minutes = (this.seconds / 60);
    }
    msToTime(s: number) {
      const ms = s % 1000;
      s = (s - ms) / 1000;
      const secs = s % 60;
      s = (s - secs) / 60;
      const mins = s % 60;
      const hrs = (s - mins) / 60;
      this.timeFormatted = this.padNum(hrs) + ':' + this.padNum(mins) + ':' + this.padNum(secs);
      return this.timeFormatted;
      // return hrs + ':' + mins + ':' + secs + '.' + ms;
    }


    fillTestValues() {
      this.myform.patchValue({
        title: 'test Value1',
        client: 'viget',
        description: 'descripto test Val lorem ipsum',
        // project: 'firt website',
        // formControlName2: myValue2 (can be omitted)
      });
    }
    ngAfterViewInit() {
    }
    loadTimeValue() {
      // this.timeValue = this.timeService.getBehaviorTime();
      this.getTime();
      this.timeValue = this.timeService.currentTime.value;
      console.log('timeValue,,', this.timeValue);
      // this.subscription = this.timeService.timeUpdated
      // .subscribe(
      //   (data: number) => {
      //     console.log('loadTimeValue',data);
      //     this.timeValue = data;
      //     this.myform.value.number = data;
      //   }
      // );
    }
    padNum(num: number) {
      if (Number(num) < 10) {
        return '0' + num;
      } else {
        return '' + num;
      }
    }
    getTime() {
      this.timeValue = this.timeService.getBehaviorTime();
      this.timeSubscription = this.timeService.currentTime
      .subscribe(
        (data: number) => {
          console.log('getTime',data);
          this.timeValue = data;
          this.myform.value.number = data;
          this.convertNumToTime(this.timeValue);
          this.myform.value.number = this.msToTime(this.timeValue);
        }
      );
    }
    // getTimeBehav() {}

    logForm() {
      // this.myform.value.number = this.timeService.getTime();
      this.loadTimeValue();
      console.log('this.myform.num', this.myform.value.number);
      console.log('this.myform', this.myform.value);
    }
    // sendToTimeSheet() {
    //   this.entry = this.myform.value;
    //   console.log('this.myform', this.entry);
    //   this.entryService.addEntry(this.entry);
    //   // this.router.navigate(['/entry-list']);
    // }

    cancelEditing(): void {
      this.router.navigate(['../'], { relativeTo: this.route});
    }
    onSubmitEntry(): void {
      if (this.editMode) {
        console.log(this.myform.value);
        this.entryService.updateEntry(this.id, this.myform.value);
      } else {
        this.entryService.addEntry(this.myform.value);
      }
      this.cancelEditing();
    }
    // get controls(): any { // a getter!
    //   return (<FormArray>this.myform.get('ingredients')).controls;
    // }

  }
