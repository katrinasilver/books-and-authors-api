const model = require('../models/books')

// Get all Books
const getAll = (req, res, next) => {
  const limit = req.query.limit
  const data = model.getAll(limit)
  res.status(200).json({ data })
}

// Get a Book
const getOne = (req, res, next) => {
  const result = model.getOne(req.params.id)

  if (result.errors) {
    return next({ status: 400, message: `Book not found`, errors: result.errors })
  }

  res.status(200).json({ data: result })
}

module.exports = {
  getAll, getOne
}
