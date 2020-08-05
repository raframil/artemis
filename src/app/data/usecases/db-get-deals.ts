import { GetDealsRepository } from './../protocols/get-deals-repository';
import { GetDeals } from '../../domain/usecases/get-deals'
import { AxiosResponse } from 'axios'

export class DbGetDeals implements GetDeals {
  constructor (
    private readonly getDealsRepository: GetDealsRepository
  ) {}

  async get (): Promise<AxiosResponse> {
    const deals = await this.getDealsRepository.get()
    return deals
  }
}
