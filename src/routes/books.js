const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/books')

router.get('/', ctrl.getAll)
router.post('/', ctrl.create)

router.get('/:id', ctrl.getOne)
router.patch('/:id', ctrl.edit)

module.exports = router
