const uuid = require('uuid/v4')
const books = require('./data/books')

const getAll = (limit) => limit ? books.slice(0, limit) : books

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
  const { name, borrowed } = body
  let entry

  if (!name) {
    errors.push(`book name is missing.`)
    entry = { errors }

  } else if (name.length > 30) {
    errors.push(`name exceeds 30 characters`)
    entry = { errors }

  } else {
    const book = { id: uuid(), name,  borrowed: 'false', authors: [] }
    books.push(book)
    entry = book
  }
  return entry
}

const edit = (id, body) => {
  const errors = []
  const { name, borrowed } = body
  let book = books.find(b => b.id === id)
  let index = books.findIndex(b => b.id === id)
  let entry

  if (!name || name.length > 30) {
    errors.push(`name is missing or exceeds 30 characters`)
    entry = { errors }

  } else if (borrowed !== 'true' && borrowed !== 'false') {
    errors.push(`borrowed: set to true or false`)
    entry = { errors }

  } else {
    book.borrowed = borrowed
    book.name = name
    books.splice(index, 1, book)
    entry = book

  }
  return entry
}

module.exports = {
  getAll, getOne, create, edit
}
