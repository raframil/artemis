import { AxiosResponse } from 'axios';

export interface GetDealsRepository {
  get: () => Promise<AxiosResponse>
}