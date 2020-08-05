import { AxiosResponse } from 'axios';
import { CreateDealModel } from '../../domain/models/deal';

export interface CreateDealRepository {
  add: (deal: CreateDealModel) => Promise<void>
}