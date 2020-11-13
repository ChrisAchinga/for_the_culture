import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('popo')
})

app.listen(1557, console.log('running'))