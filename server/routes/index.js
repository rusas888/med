const express = require('express')
const router = express.Router()

router.use('/auth', require('./auth'))



const { verifyJWT_MW } = require('../middlewares/auth.mw')
router.use('/calc', verifyJWT_MW)
router.use('/calc', require('./calc'))
module.exports = router