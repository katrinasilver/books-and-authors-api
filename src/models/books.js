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
  const { name, borrowed } = body
  let entry

  if (!body.name && !body.borrowed) {

    errors.push(`post body is missing or incorrect. please use "name" and "borrowed" for the keys and both values should be in double quotes like this error message :D`)
    entry = { errors }

  } else if (body.name.length > 30) {
    errors.push(`name exceeds 30 characters`)
    entry = { errors }

  } else if (body.borrowed !== "true" && body.borrowed !== "false") {

    errors.push(`borrowed: true or false`)
    entry = { errors }

  } else {

    let book = { id: uuid(), name, borrowed, authors: [] }

    books.push( book )
    entry = book

  }
  return entry
}

module.exports = {
  getAll, getOne, create
}
