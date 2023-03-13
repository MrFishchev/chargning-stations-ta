export type CreateCompanyDto = {
  name: string
  parentCompany: number | undefined
}

export type UpdateCompanyDto = CreateCompanyDto

export type FilterCompaniesDto = {
  parentCompany?: number
}
