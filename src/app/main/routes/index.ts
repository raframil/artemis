import { Router } from 'express'
import { adaptRoute } from './../adapter/express-route-adapter';
import { makeDealsController } from '../../main/factories/deals-controller-factory'
import { makeIntegrationController } from '../factories/integration-controller-factory';
import { makeAggregateDealsController } from '../factories/aggregate-deals-controller-factory';

const router: Router = Router()
router.get('/deals', adaptRoute(makeDealsController()))
router.post('/deals', adaptRoute(makeIntegrationController()))

router.get('/deals/saved', adaptRoute(makeAggregateDealsController()))

export default router
