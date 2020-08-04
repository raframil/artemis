import { GetDeals } from './../services/get-deals'
import { Request, Response, NextFunction } from 'express'

export class OrderController {
  async getOrders (request: Request, response: Response, next: NextFunction): Promise<Response | undefined> {
    try {
      const getDealsController = new GetDeals()
      const data = await getDealsController.handle()
      console.log(data)
      return response.json(data)
    } catch (error) {
      next(error)
    }
  }
}
