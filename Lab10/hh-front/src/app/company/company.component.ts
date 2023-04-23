import {Component} from '@angular/core';
import {Company} from "../models";
import {CompanyService} from "../company.service";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {


  companies: Company[] = []
  // newCompany: string = '';
  newCompany: Company;

  constructor(private companyService: CompanyService) {
    this.newCompany = {} as Company;
  }

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe((data: Company[])=>{
      // console.log(data)
      this.companies = data;
    })
    // this.companies.push(
    //   {id:1, name: 'Kolesa'},
    //   {id:2, name: 'Kaspi'},
    //   {id:3, name: 'Koko'}
    // )
  }

  addCompany() {
    // if (!this.newCompany.city) {
    //   this.newCompany.city = null;
    // }
    this.companyService.createCompany(this.newCompany).subscribe((data: Company)=>{
      this.companies.push(data);
      this.newCompany = {} as Company
    });
  }
  removeCompany(id: number){
    this.companyService.deleteCompany(id).subscribe((data)=>{
      this.companies = this.companies.filter(x=> x.id !== id);
      console.log(data)
    })
  }

}
