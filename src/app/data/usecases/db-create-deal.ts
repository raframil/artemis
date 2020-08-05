import { GetDealsRepository } from './../protocols/get-deals-repository';
import { CreateDeal } from '../../domain/usecases/create-deal'
import { CreateDealRepository } from '../protocols/create-deal-repository';
import { CreateDealModel } from '../../domain/models/deal';

export class DbCreateDeal implements CreateDeal {
  constructor (
    private readonly createDealRepository: CreateDealRepository
  ) {}

  async add (deal: CreateDealModel): Promise<void> {
    const createdDeal = await this.createDealRepository.add(deal)
    return createdDeal
  }
}
