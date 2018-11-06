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

module.exports = {
  getAll, getOne
}
