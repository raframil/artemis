import { DealRepository } from './../../infra/database/repository/deal-repository';
import { CreateBlingOrder } from './../../infra/services/create-bling-order';
import { GetDealsService } from './../../infra/services/get-deals';

import { Controller } from '../../presentation/protocols'
import { IntegrationController } from '../../presentation/controllers/integration-controller'

import { PersistDealControllerDecorator } from '../decorators/persist-deal'
import { PipedriveClient } from '../../infra/utils/pipedrive';

export const makeIntegrationController = (): Controller => {
  const dealRepository = new DealRepository()
  const createBlingOrder = new CreateBlingOrder()

  const getDealsService = new GetDealsService(new PipedriveClient)

  const persistDealDecorator = new PersistDealControllerDecorator(createBlingOrder, dealRepository)
  const integrationController = new IntegrationController(getDealsService, persistDealDecorator)

  return integrationController
}