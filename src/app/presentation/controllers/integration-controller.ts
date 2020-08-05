import { PersistDealControllerDecorator } from './../../main/decorators/persist-deal';
import { HttpResponse, HttpRequest, Controller } from './../protocols'
import { serverError, success, unauthorized } from '../helpers/http-helper'
import { GetDeals } from '../../domain/usecases/get-deals'

export class IntegrationController implements Controller {
  constructor (
    private readonly getDeals: GetDeals,
    private readonly createDeal: PersistDealControllerDecorator
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const deals = await this.getDeals.get()

      const createdDeals: any[] = []

      for await (const deal of deals) {
        createdDeals.push(await this.createDeal.post(deal))
      }

      const hasUnauthorized = createdDeals.map((item) => {
        return item.status
      })

      if (hasUnauthorized.find(key => key === 401)) {
        // return unauthorized()
      }


      return success({ message: 'Integration completed'})
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}
