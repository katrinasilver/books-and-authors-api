const model = require('../models/authors')

const getAll = (req, res, next) => {
  const limit = req.query.limit
  res.status(200).send(`ctrl getAll from model`)
}

const create = (req, res, next) => {
  res.status(200).send(`ctrl create for model`)
}

module.exports = {}
