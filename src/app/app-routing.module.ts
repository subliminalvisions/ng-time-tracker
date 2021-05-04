import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  // { path: 'news', component: NewsComponent},
  // { path: 'products', component: ProductsComponent, children: [
  //   { path: ':id', component: ProductComponent },
  //   { path: ':id/edit', component: EditProductComponent }
  // ]},
  { path: 'not-found', component: PageNotFoundComponent},
  { path: '**', redirectTo: 'not-found'  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
