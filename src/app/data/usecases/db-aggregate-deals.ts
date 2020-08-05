import { AggregateDealsRepository } from './../protocols/aggregate-deals-repository';
import { AggregateDeals } from '../../domain/usecases/aggregate-deals'

export class DbAggregateDeals implements AggregateDeals {
  constructor (
    private readonly aggregateDealsRepository: AggregateDealsRepository
  ) {}

  async get (date: string): Promise<any> {
    const aggregateDeals = await this.aggregateDealsRepository.get(date)
    return aggregateDeals
  }
}
