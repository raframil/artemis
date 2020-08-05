import { AxiosResponse } from 'axios'
import { CreateDealModel } from '../models/deal';

export interface CreateDeal {
  add (deal: any): Promise<void>
}
