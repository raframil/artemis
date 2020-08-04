import { Request, Response, NextFunction } from 'express'

export class OrderController {
  async getOrders (request: Request, response: Response, next: NextFunction): Promise<Response | undefined> {
    try {
      return response.json({ msg: 'Orders route working' })
    } catch (error) {
      next(error)
    }
  }
}
