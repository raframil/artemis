import express from 'express'
import { OrderController } from '../controllers/order-controller'

const router = express.Router()

const orderController = new OrderController()

router.get('/orders', orderController.getOrders)

export default router
