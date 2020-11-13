const express = require('express')
const path = require('path')
const books = require('./Books')

const app = express()
const PORT = process.env.PORT || 3000

// rest api
app.get('/books/list/all', (req, res) => {
  res.json(books)
})

// get a single book by id
app.get('/books/list/:id', (req, res) => {
  res.json(books.filter((book) => book.id === parseInt(req.params.id)))
})

// set static folder
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => {
  console.log(`Server has started on PORT ${PORT}`)
})
