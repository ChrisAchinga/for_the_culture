const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000

// set static folder
app.use(express.static(path.join(__dirname, 'public')))

// books api routes
app.use('/books/list', require('./routes/books'))

app.listen(PORT, () => {
  console.log(`Server has started on PORT ${PORT}`)
})
