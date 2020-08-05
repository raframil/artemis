import { BlingClient } from '../utils/bling'
import config from '../../../config/services'
import { BuildOrder } from '../utils/build-order-xml';
import querystring from 'querystring'

export class CreateBlingOrder {
  private bingClient: BlingClient;
  private buildOrder: BuildOrder

  constructor () {
    this.bingClient = new BlingClient()
    this.buildOrder = new BuildOrder()
  }

  async create (deal: any): Promise<any> {
    const xmlOrder = await this.buildOrder.build(deal)
    const body = {
      apikey: config.bling.token,
      xml: xmlOrder
    }

    try {
      const formData = querystring.stringify(body)
      const res = await this.bingClient.createOrder(formData)
    } catch (error) {
      const blingError = {
        status: error.response.status,
        statusText: error.response.statusText
      }
      console.log(`Error while creating an order on Bling for order ${deal.dealId}`)
      return blingError
    }
  }
}
