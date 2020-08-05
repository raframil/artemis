import { Controller } from "../../presentation/protocols"
import { AggregateDealsController } from '../../presentation/controllers/aggregate-deals-controller';
import { DealRepository } from './../../infra/database/repository/deal-repository';

export const makeAggregateDealsController = (): Controller => {
  const dealRepository = new DealRepository()
  const controller = new AggregateDealsController(dealRepository)
  return controller
}