import { AxiosResponse } from 'axios'

export interface GetDeals {
  get (): Promise<AxiosResponse>
}
