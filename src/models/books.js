const uuid = require('uuid/v4')
const books = require('./data/books')

// Get all Books
const getAll = (limit) => limit ? books.slice(0, limit) : books

// Get a Book
const getOne = (id) => {
  const errors = []
  const bid = books.find(b => b.id === id)

  if (!bid) {
    errors.push(`book id is required`)
    return { errors }
  }
  return bid
}

const create = (body) => {
  const errors = []
  // const { id: uuid(), title, borrowed, description, authors: [uuid()] } = body

  // read
  // parse
  // write
  // do your thing
  // stringify
  // push

  let entry
  if (!entry) {
    errors.push(`book id is required`)
    return { errors }
  } else {
    books.push( body )
    entry = body
  }

  return entry
}

module.exports = {
  getAll, getOne, create
}
