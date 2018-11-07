const express = require('express')
const app = express()
const morgan = require('morgan')
const port = process.env.PORT || 3000

app.use(express.json())
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))

// Get Routes
const booksRoutes = require('./src/routes/books')
const authorRoutes = require('./src/routes/authors')
app.use('/books', booksRoutes)
app.use('/books/:id', authorRoutes)

// Custom Errors
app.use((err, req, res, next) => {
  console.error(err)
  const status = err.status || 404
  res.status(status).json({ error: err })
})

// Route Errors
app.use((req, res, next) => res.status(501).json({ error: { type: 501, message: `route not implemented` } }))

const listener = () => console.log(`Listening on port ${ port }!`)
app.listen(port, listener)

module.exports = app
