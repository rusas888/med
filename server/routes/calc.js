const express = require('express')
const router = express.Router()
const { sum } = require('../controllers/calc.controller')

router.post('/sum', sum)

module.exports = router