const model = require('../models/authors')

const getAll = (req, res, next) => {
  const limit = req.query.limit
  const data = model.getAll(limit)
  res.status(200).send({ data })
}

module.exports = {
  getAll
}
