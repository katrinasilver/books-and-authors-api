const uuid = require('uuid/v4')
const books = require('./data/books')

const getAll = (limit) => {
  const errors = []

  if (!books.length) {
    errors.push(`there are no books in the database right now :(`)
    return { errors }
  }
  return limit ? books.slice(0, limit) : books
}

const getOne = (id) => {
  const errors = []
  const book = books.find(b => b.id === id)

  if (!book) {
    errors.push(`book id doesn't exist`)
    return { errors }
  }
  return book
}

const create = (body) => {
  const errors = []
  const name = body.name

  if (!name) {
    errors.push(`book name is missing.`)
    return { errors }

  } else if (name.length > 30) {
    errors.push(`name exceeds 30 characters`)
    return { errors }

  } else {
    const book = {
      id: uuid(), name, borrowed: 'false', authors: [] }
    books.push(book)
    return book

  }
}

const edit = (id, body) => {
  const errors = []
  const { name, borrowed } = body
  let book = books.find(b => b.id === id)

  if (name && name.length > 30) {
    errors.push(`name is missing or exceeds 30 characters`)
    return { errors }

  } else if (borrowed && (borrowed !== 'true' && borrowed !== 'false')) {
    errors.push(`borrowed: set to true or false`)
    return { errors }

  } else if (!borrowed) {
    book.name = name
    return book

  } else if (!name) {
    book.borrowed = borrowed
    return book

  } else {
    book.borrowed = borrowed
    book.name = name
    return book
  }
}

const deleteOne = (id) => {
  const errors = []
  let book = books.find(b => b.id === id)
  let index = books.findIndex(b => b.id === id)

  if (!book) {
    errors.push(`book id doesn't exist`)
    return { errors }
  }

  books.splice(index, 1)
  return books
}

module.exports = {
  getAll, getOne, create, edit, deleteOne
}
