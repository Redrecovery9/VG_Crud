const express = require('express')
const router = express.Router();
const queries = require('../queries')

router.get('/', (req,res, next) => {
  queries.getVideoGames().then(function(videogames) {
    res.json(videogames)
  })
})
 module.exports = router
