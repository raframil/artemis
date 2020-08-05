import { BlingClient } from '../utils/bling'
import config from '../../../config/services'
import { BuildOrder } from '../utils/buildOrderXml';
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
      const response = await this.bingClient.createOrder(formData)

      console.log(response)
    } catch (error) {
      console.log('Error while creating an order')
      return error
    }
  }
}
