const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/authors')

router.get('/authors/:id', ctrl.getAuthor)
router.post('/authors', ctrl.create)
router.patch('/authors/:authorid', ctrl.edit)

module.exports = router
