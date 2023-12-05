const { Router } = require('express')
const {body} = require('express-validator')
const controller = require('../controllers/controllers.js')
const router = new Router()

router.get('/', controller.initDatabase)
router.get('/list', controller.getSubscribers)
router.post('/subscribe',
    body('email').isEmail().normalizeEmail(),
    body('firstname').not().isEmpty().escape(),
    body('lastname').not().isEmpty().escape(),
    controller.addSubscriber
)

module.exports = router