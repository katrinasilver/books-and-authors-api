const shortid = require('short-id')
const file = require('./filesync')
const authors = require('./data/authors')

shortid.configure({ length: 10 })

const getAuthor = (id) => {
  const errors = []
  const authors = file.filesync('read', '/authors.json')
  const author = authors.find(a => a.id === id)

  if (!author) {
    errors.push(`author id doesn't exist`)
    return { errors }
  }
  return author
}

const create = (id, body) => {
  const errors = []
  const { first_name, last_name } = body
  const authors = file.filesync('read', '/authors.json')
  const books = file.filesync('read', '/books.json')
  let book = books.find(b => b.id === id)


  if (!book) {
    errors.push(`book doesn't exist`)
    return { errors }
  }

  if (!body.first_name && !body.last_name) {
    errors.push(`author must have first_name and last_name`)
    return { errors }
  } else {

    let author = { id: shortid.generate(), first_name, last_name }

    authors.push(author)
    book.authors.push(author.id)
    file.filesync('write', '/authors.json', authors)
    file.filesync('write', '/books.json', books)

    return author
  }

}

const edit = (id, body) => {
  const errors = []
  const { first_name, last_name } = body

  const authors = file.filesync('read', '/authors.json')
  const author = authors.find(a => a.id === id)

  if (!body.first_name && !body.last_name) {
    errors.push(`author must have a first_name and last_name`)
    return { errors }
  }

  if (!author) {
    errors.push(`author doesn't exist`)
    return { errors }
  }

  author.first_name = first_name
  author.last_name = last_name
  file.filesync('write', '/authors.json', authors)

  return author
}

const deleteOne = (id, authorid) => {
  const errors = []
  const authors = file.filesync('read', '/authors.json')
  const books = file.filesync('read', '/books.json')

  const book = books.find(b => b.id === id)
  const bindex = book.authors.findIndex(a => a === authorid)

  const index = authors.findIndex(a => a.id === id)

  if (!authorid) {
    errors.push(`author id doesn't exist`)
    return { errors }
  }

  authors.splice(index, 1)
  book.authors.splice(bindex, 1)

  file.filesync('write', '/authors.json', authors)
  file.filesync('write', '/books.json', books)

  return book
}

module.exports = {
  create, getAuthor, edit, deleteOne
}
