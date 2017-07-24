const express = require('express')
const knex = require('knex')
const server = express()
const port = process.env.PORT || 1995

server.listen(port)
