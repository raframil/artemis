import { formatDeal } from './../utils/format-deal';
import { GetDealsRepository } from './../../data/protocols/get-deals-repository';
import { PipedriveClient } from '../utils/pipedrive'
import { AxiosResponse } from 'axios'

export class GetDealsService implements GetDealsRepository {
  private pipedriveClient: PipedriveClient;

  constructor (pipedriveClient: PipedriveClient) {
    this.pipedriveClient = pipedriveClient
  }

  async get (): Promise<any> {
    const { data: response } = await this.pipedriveClient.getDeals({
      params: {
        status: 'won',
        start: '0'
      }
    })
    const deals = response.data

    const serializedDeals = await formatDeal(deals)
    return serializedDeals
  }
}
