const model = require('../models/books')

const getAll = (req, res, next) => {
  const limit = req.query.limit
  const data = model.getAll(limit)
  res.status(200).json(data)
}

const getOne = (req, res, next) => {
  const data = model.getOne(req.params.id)

  if (data.errors) {
    return next({ status: 400, message: `book not found`, errors: data.errors })
  }

  res.status(200).json(data)
}

const create = (req, res, next) => {
  const data = model.create(req.body)

  if (data.errors) {
    return next({ status: 400, message: `post failed`, errors: data.errors })
  }

  res.status(201).json(data)
}

const edit = (req, res, next) => {
  let data = model.edit(req.params.id, req.body)

  if (data.errors) {
    return next({ status: 400, message: `edit failed`, errors: data.errors })
  }

  res.status(201).json(data)
}

const deleteOne = (req, res, next) => {
  let data = model.deleteOne(req.params.id)

  if (data.errors) {
    return next({ status: 400, message: `delete failed`, errors: data.errors })
  }

  res.status(200).json(data)
}

module.exports = {
  getAll, getOne, create, edit, deleteOne
}
