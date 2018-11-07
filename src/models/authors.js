const uuid = require('uuid/v4')
const authors = require('./data/authors')

const getAuthor = (id) => {
  const errors = []
  const author = authors.find(b => b.id === id)

  if (!author) {
    errors.push(`author id doesn't exist`)
    return { errors }
  }
  return author
}

const create = (body) => {
  const errors = []
  const { first_name, last_name } = body

  if (!body) {
    errors.push(`author must have full name`)
    return { errors }
  } else {
    let author = {
      id: uuid(), first_name, last_name
    }
    authors.push(author)
    return author
  }
}

module.exports = {
  create, getAuthor
}
