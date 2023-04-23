import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Company, Vacancy} from "../models";
import {CompanyService} from "../company.service";

@Component({
  selector: 'app-company-vacancies',
  templateUrl: './company-vacancies.component.html',
  styleUrls: ['./company-vacancies.component.css']
})
export class CompanyVacanciesComponent implements OnInit {

  company: Company;
  vacancies: Vacancy[];

  constructor(private route: ActivatedRoute, private companyService: CompanyService) {
    this.company = {} as Company
    this.vacancies = []
  }

  ngOnInit(): void {
    this.getCompany()
    this.getVacanciesByCompanyId()
  }

  getCompany(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = Number(params.get('id'));
      this.companyService.getCompanyById(id).subscribe((company: Company) => {
        this.company = company;
      });
    });
  }

  getVacanciesByCompanyId(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id: number = Number(params.get('id'));
      this.companyService.getCompanyVacancies(id).subscribe((data: Vacancy[]) => {
        this.vacancies = data;
        console.log(this.vacancies)
      });
    });
  }

}
