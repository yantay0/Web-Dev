import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Company, Vacancy} from "./models";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  BASE_URL = 'http://127.0.0.1:8000'

  constructor(private client: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.client.get<Company[]>(
      `${this.BASE_URL}/api/companies`
    )
  }

  getCompanyById(id:number): Observable<Company> {
    return this.client.get<Company>(
      `${this.BASE_URL}/api/companies/${id}`
    )
  }

  createCompany(company: Company): Observable<Company> {
    return this.client.post<Company>(`${this.BASE_URL}/api/companies/`, company);
  }
  deleteCompany(id: number): Observable<any>{
    return this.client.delete<Company>(
      `${this.BASE_URL}/api/companies/${id}`
    )
  }

  getCompanyVacancies(companyId: number): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/api/companies/${companyId}/vacancies/`);
  }
}
