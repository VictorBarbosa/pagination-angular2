import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }  from './app.component';


import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';
 
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
 
const appRoutes: Routes = [
 
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'page3', component: Page3Component },
  { path: '',   redirectTo: '/page1', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    Page1Component, 
    Page2Component, 
    Page3Component, 
    PageNotFoundComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
