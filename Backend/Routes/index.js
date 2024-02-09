const router = require("express").Router()

router.use('/api', require('./routes'))
router.get('/', (req, res) => {
    return res.send("csdc")
})
module.exports = router