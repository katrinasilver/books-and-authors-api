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

const edit = (id, body) => {
  const errors = []
  const { first_name, last_name } = body
  let author = authors.find(b => b.id === id)

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
