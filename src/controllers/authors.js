const model = require('../models/authors')

const getAuthor = (req, res, next) => {
  const data = model.getAuthor(req.params.authorid)

  if (data.errors) {
    return next({ status: 400, message: `author not found`, errors: data.errors })
  }

  res.status(200).json(data)
}

const create = (req, res, next) => {
  const data = model.create(req.params.id, req.body)

  if (data.errors) {
    return next({ status: 400, message: `add author failed`, errors: data.errors })
  }

  res.status(201).json(data)
}

const edit = (req, res, next) => {
  const data = model.edit(req.params.authorid, req.body)

  if (data.errors) {
    return next({ status: 400, message: `edit author failed`, errors: data.errors })
  }

  res.status(201).json(data)
}

const deleteOne = (req, res, next) => {
  const data = model.deleteOne(req.params.id, req.params.authorid)

  if (data.errors) {
    return next({ status: 400, message: `delete author failed`, errors: data.errors })
  }

  res.status(200).json(data)
}

module.exports = {
  create, getAuthor, edit, deleteOne
}
