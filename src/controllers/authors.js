const model = require('../models/authors')

const getAuthor = (req, res, next) => {
  const data = model.getAuthor(req.params.id)

  if (data.errors) {
    return next({ status: 400, message: `author not found`, errors: data.errors })
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

module.exports = {
  create, getAuthor
}
