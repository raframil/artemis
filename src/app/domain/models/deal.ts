import mongoose, { Schema } from 'mongoose'

export interface IOrder extends mongoose.Document {
    _id: string
    dealId: number
    status: string
    name?: string
    clientName?: string
    date: Date
    value: number
    currency?: string
}

const OrderSchema: Schema = new Schema({
  dealId: Number,
  name: String,
  clientName: String,
  status: String,
  date: {
    type: Date,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  currency: String
})

export default mongoose.model<IOrder>('Order', OrderSchema)
