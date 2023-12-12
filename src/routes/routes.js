const { Router } = require('express')
const {body} = require('express-validator')
const controller = require('../controllers/controllers.js')
const router = new Router()

router.get('/', controller.initDatabase)
router.get('/users', controller.getSubscribers)
router.get('/users/:id', controller.getOneSubscriber)
router.post('/subscribe',
    body('email').isEmail().normalizeEmail(),
    body('firstname').not().isEmpty().escape(),
    body('lastname').not().isEmpty().escape(),
    controller.addSubscriber
)
router.put('/users/:id',
    body('email').isEmail().normalizeEmail(),
    body('firstname').not().isEmpty().escape(),
    body('lastname').not().isEmpty().escape(),
    controller.updateSubscriber
)
router.patch('/users/:id',
    body('email').isEmail().normalizeEmail(),
    controller.partialUpdate
)
router.delete('/users/:id', controller.deleteUser)

module.exports = router