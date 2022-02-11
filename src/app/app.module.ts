import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RestService } from './services/rest.service';
import { UtilityService } from './services/utility.service';
import { HomeComponent } from './view/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [UtilityService, RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
