import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompanyVacanciesComponent} from "./company-vacancies/company-vacancies.component";
import {CompanyComponent} from "./company/company.component";

const routes: Routes = [
  {path:'', redirectTo: 'companies', pathMatch: 'full'},
  {path: 'companies', component: CompanyComponent},
  {path: ':id/vacancies', component: CompanyVacanciesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
