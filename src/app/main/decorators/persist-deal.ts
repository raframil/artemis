import { DealRepository } from './../../infra/database/repository/deal-repository';
import { CreateBlingOrder } from './../../infra/services/create-bling-order';
import { CreateDealModel } from '../../domain/models/deal';


export class PersistDealControllerDecorator {
  createBlingOrder: CreateBlingOrder
  dealRepository: DealRepository

  constructor (createBlingOrder: CreateBlingOrder, dealRepository: DealRepository) {
    this.createBlingOrder = createBlingOrder
    this.dealRepository = dealRepository
  }

  async post (deal: any) {
    try {
      const blingOrder = await this.createBlingOrder.create(deal)

      /* TODO check if blingOrder was inserted correctly
      if(blingOrder.statusText) {
        return blingOrder
      }
      */

      await this.dealRepository.add(deal)
      return true
    } catch (error) {
      return error
    }
  }
}

