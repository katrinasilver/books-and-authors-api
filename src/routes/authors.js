const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/authors')

router.get('/', ctrl.getAll)

module.exports = router
