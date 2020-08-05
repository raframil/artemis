import { AggregateDealsRepository } from './../../../data/protocols/aggregate-deals-repository';
import { CreateDealRepository } from './../../../data/protocols/create-deal-repository';
import { Deal, CreateDealModel } from '../../../domain/models/deal'

export class DealRepository implements CreateDealRepository, AggregateDealsRepository {
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

    async get(date: string): Promise<any> {
        const result = await Deal.aggregate([
            {
                $group: {
                    _id: {
                        date: {
                            $dateToString: {
                                date: '$date',
                                format: '%Y-%m-%d'
                            }
                        }
                    },
                    numberOfSales: { $sum: 1 },
                    totalValue: { $sum: '$value' },
                    deals: { $push: '$$ROOT' }
                },
            }, { $sort: { _id: 1 } }
        ])
        return result
    }
        
}