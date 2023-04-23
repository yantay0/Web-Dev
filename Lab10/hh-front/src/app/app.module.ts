import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
// import { VacanciesListComponent } from './vacancies-list/vacancies-list.component';
import {CompanyVacanciesComponent} from './company-vacancies/company-vacancies.component';
import {CompanyComponent} from './company/company.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    CompanyVacanciesComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
