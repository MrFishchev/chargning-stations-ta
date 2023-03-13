import { Company } from '../../interfaces'
import { CompanyOutput } from '../../../db/models/Company'

export const toCompany = (company: CompanyOutput): Company => {
  return {
    id: company.id,
    name: company.name,
    parentCompany: company.parentCompany
  }
}
