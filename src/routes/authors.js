const express = require('express')
const router = express.Router({ mergeParams: true })
const ctrl = require('../controllers/authors')

router.get('/authors/:authorid', ctrl.getAuthor)
router.post('/authors', ctrl.create)
router.patch('/authors/:authorid', ctrl.edit)
router.delete('/authors/:authorid', ctrl.deleteOne)

module.exports = router
