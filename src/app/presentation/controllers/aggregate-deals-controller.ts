import { HttpResponse, HttpRequest, Controller } from './../protocols'
import { serverError, success, noContent } from '../helpers/http-helper'
import { AggregateDeals } from '../../domain/usecases/aggregate-deals'

export class AggregateDealsController implements Controller {
  constructor (
    private readonly aggregateDeals: AggregateDeals
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { date } = httpRequest.query
      const aggregatedDeals = await this.aggregateDeals.get(date)

      return aggregatedDeals.length ? success(aggregatedDeals) : noContent()
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}
