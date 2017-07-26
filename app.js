const express = require('express')
const knex = require('./knex')
const app = express()
const cors = require('cors')
const game = require('./routes/vg')
const bodyParser =require('body-parser')
const port = process.env.PORT || 1995

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use('/', game)




app.listen(port)

module.exports = app;
