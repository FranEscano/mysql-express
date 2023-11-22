import { Router } from 'express'
import controller from '../controllers/controllers.js'
import { body } from 'express-validator'
const router = new Router()

router.get('/init', controller.initDatabase)
router.get('/', controller.getSubscribers)
router.post('/subscribe',
    body('email').isEmail().normalizeEmail(),
    body('firstname').not().isEmpty().escape(),
    body('lastname').not().isEmpty().escape(),
    controller.addSubscriber
)

export default router