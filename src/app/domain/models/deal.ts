import mongoose, { Schema, model } from 'mongoose'

interface IDeal extends mongoose.Document {
    _id: string
    dealId: number,
    title: string,
    clientName: string,
    value: number,
    currency: string,
    date: string,
    status: string,
    email: string
}

const DealSchema: Schema = new Schema({
  dealId: Number,
  title: String,
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
  currency: String,
  email: String
})

interface CreateDealModel {
  dealId: number,
  title: string,
  clientName: string,
  value: number,
  currency: string,
  date: string,
  status: string,
  email: string
}

const Deal = model<IDeal>('Deal', DealSchema)

export { IDeal, Deal, CreateDealModel }
