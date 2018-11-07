const model = require('../models/books')

// Get all Books
const getAll = (req, res, next) => {
  const limit = req.query.limit
  const data = model.getAll(limit)
  res.status(200).json({ data })
}

// Get a Book
const getOne = (req, res, next) => {
  const data = model.getOne(req.params.id)

  if (data.errors) {
    return next({ status: 400, message: `book not found`, errors: data.errors })
  }

  res.status(200).json({ data })
}

// Create a Book
const create = (req, res, next) => {
  const data = model.create(req.body)

  if (data.errors) {
    return next({ status: 400, message: `post error`, errors: data.errors })
  }

  res.status(201).json({ data })
}

module.exports = {
  getAll, getOne, create
}
