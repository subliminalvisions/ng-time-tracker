import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { TimeEntryComponent } from './time-entry/time-entry.component';
import { EntryListComponent } from './entries/entry-list.component';
import { IntroComponent } from './intro/intro.component';
import { TimeEntryEditComponent } from './time-entry/time-entry-edit/time-entry-edit.component';
import { TimeEntryComponent } from './time-entry/time-entry.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: IntroComponent },
  // { path: 'new', component: TimeEntryComponent},
  // { path: 'time-entry',
  // component: TimeEntryComponent
  // },
  { path: 'entries',
  // component: EntryListComponent
   children: [
    { path: '', pathMatch: 'full', redirectTo: 'list' },
    { path: 'list', component: EntryListComponent },
    { path: 'new', component: TimeEntryComponent },
    { path: ':id', component: TimeEntryEditComponent },
    { path: ':id/edit', component: TimeEntryEditComponent },
    ]
  },
  // { path: 'news', component: NewsComponent},
  // { path: 'products', component: ProductsComponent, children: [
  //   { path: ':id', component: ProductComponent },
  //   { path: ':id/edit', component: EditProductComponent }
  // ]},
  { path: 'not-found', component: PageNotFoundComponent},
  // { path: '**', redirectTo: 'not-found'  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
