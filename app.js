const express = require('express')
const knex = require('./knex')
const app = express()
const game = require('./routes/vg')
const port = process.env.PORT || 1995

app.use('/videogames', game)

app.listen(port)
