const express = require('express')
const router = express.Router()
const books = require('../Books')

// rest api
router.get('/', (req, res) => {
  res.json(books)
})

// get a single book by id
router.get('/:id', (req, res) => {
  const found = books.some((book) => book.id === parseInt(req.params.id))

  if (found) {
    res.json(books.filter((book) => book.id === parseInt(req.params.id)))
  } else {
    res.status(400).json({ msg: `Book of id ${req.params.id} not found` })
  }
})

module.exports = router
