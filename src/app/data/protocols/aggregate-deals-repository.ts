export interface AggregateDealsRepository {
  get: (date: string) => Promise<any>
}