import { HttpResponse, HttpRequest, Controller } from './../protocols'
import { serverError, success } from '../helpers/http-helper'
import { GetDeals } from '../../domain/usecases/get-deals'

export class OrderController implements Controller {
  constructor (
    private readonly getDeals: GetDeals
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const data = await this.getDeals.get()
      return success(data)
    } catch (error) {
      return serverError(error)
    }
  }
}
