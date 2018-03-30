const express = require('express')
const router = express.Router()
const { getById, getAll, createNew, find } = require('../controllers/products.controller')

router.get('/', getAll)
router.post('/', createNew)
router.get('/find/:query', find)
router.get('/:id', getById)

module.exports = router