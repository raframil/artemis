import { Router } from 'express'
import { adaptRoute } from './../adapter/express-route-adapter';
import { makeDealsController } from '../../main/factories/deals-controller-factory'

const router: Router = Router()
router.get('/deals', adaptRoute(makeDealsController()))

export default router
