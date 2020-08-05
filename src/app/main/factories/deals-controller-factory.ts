import { PipedriveClient } from './../../infra/utils/pipedrive';
import { GetDealsService } from './../../infra/services/get-deals';
import { Controller } from "../../presentation/protocols"
import { OrderController } from '../../presentation/controllers/order-controller'

export const makeDealsController = (): Controller => {
  const pipedriveClient = new PipedriveClient()
  const getDeals = new GetDealsService(pipedriveClient)
  const controller = new OrderController(getDeals)
  return controller
}