export interface Company{
  id: number,
  name: string,
  description: Text ,
  city: string | null,
  address: string
}

export interface Vacancy{
  id: number,
  name: string,
  description: Text,
  salary: number,
  company: Company
}
