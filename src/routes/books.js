const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/books')

router.get('/', ctrl.getAll)
router.post('/', ctrl.create)

router.get('/:id', ctrl.getOne)
router.patch('/:id', ctrl.edit)
router.delete('/:id', ctrl.deleteOne)

module.exports = router
