const uuid = require('uuid/v4')
const authors = require('./data/authors')
const fs = require('fs')
// const path = require('path')
const file = require('./filesync')

const getAuthor = (id) => {
  const errors = []
  const data = file.filesync('read', '/authors.json')
  const author = data.find(a => a.id === id)

  if (!author) {
    errors.push(`author id doesn't exist`)
    return { errors }
  }
  return author
}

const create = (id, body) => {
  const errors = []
  const { first_name, last_name } = body
  const data = file.filesync('read', '/authors.json')
  const books = file.filesync('read', '/books.json')
  let book = books.find(b => b.id === id)

  if (!book) {
    errors.push(`author must have full name`)
    return { errors }
  } else {
    let author = {
      id: uuid(), first_name, last_name
    }

    data.push(author)
    book.authors.push(author.id)
    file.filesync('write', '/authors.json', data)
    file.filesync('write', '/books.json', books)

    return author
  }
}

const edit = (id, body) => {
  const errors = []
  const { first_name, last_name } = body
  let author = authors.find(a => a.id === id)

  if (!body.first_name && !body.last_name) {
    errors.push(`author must have a first_name and last_name`)
    return { errors }
  }

  author.first_name = first_name
  author.last_name = last_name
  return author
}

module.exports = {
  create, getAuthor, edit
}
