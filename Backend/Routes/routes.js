const {userController} = require('../Controller/index')

const router = require('express').Router()

router.post('/users', userController.users)


module.exports = router