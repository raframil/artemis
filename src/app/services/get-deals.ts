import { PipedriveClient } from '../utils/pipedrive'
import { AxiosResponse } from 'axios'

export class GetDeals {
  async handle (): Promise<AxiosResponse> {
    const pipedriveClient = new PipedriveClient()
    const now = new Date()
    const dateString = now.toISOString().slice(0, 10)

    const { data: response } = await pipedriveClient.getDeals({
      params: {
        start_date: dateString,
        interval: 'day',
        amount: 1,
        field_key: 'won_time'
      }
    })
    const { deals } = response
    return response
  }
}
