const uuid = require('uuid/v4')
const authors = require('./data/authors')

// Get All Authors
const getAll = (limit) => limit ? authors.slice(0, limit) : authors

// Create Author
// const create = (body) => {
//   const errors = []
//   const name = body.name

//   let response
//   if (!name) {
//     errors.push(`Name is required`)
//     response = { errors }
//   } else {
//     let author = { id: uuid(), name }
//     authors.push(author)
//     response = author
//   }

//   return response
// }

module.exports = {
  getAll
}
