import { CreateDealRepository } from './../../../data/protocols/create-deal-repository';
import { Deal, CreateDealModel } from '../../../domain/models/deal'

export class DealRepository implements CreateDealRepository{
    async add(deal: CreateDealModel): Promise<any> {
        const dealExists = await Deal.findOne({ dealId: deal.dealId })

        if(dealExists) {
            return
        }
    
        const dealData = await new Deal({
            dealId: deal.dealId,
            email: deal.email,
            name: deal.title,
            clientName: deal.clientName,
            date: deal.date,
            value: deal.value,
            currency: deal.currency
        }).save();

        return dealData
    }
}