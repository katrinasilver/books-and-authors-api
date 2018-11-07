const uuid = require('uuid/v4')
const books = require('./data/books')

const getAll = (limit) => limit ? books.slice(0, limit) : books

const getOne = (id) => {
  const errors = []
  const book = books.find(b => b.id === id)

  if (!book) {
    errors.push(`book id is required`)
    return { errors }
  }
  return book
}

const create = (body) => {
  const errors = []
  const { name, borrowed } = body
  let entry

  if (!body.name || !body.borrowed) {

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

const edit = (id, body) => {
  const errors = []
  const book = books.find(b => b.id === id)
  const name = body.name
  let entry

  if (!name || name.length > 30) {

    errors.push(`name is missing or exceeds 30 characters`)
    entry = { errors }

  } else {

    book.name = name
    books.push(book)
    entry = name

  }

  return entry

}

module.exports = {
  getAll, getOne, create, edit
}
