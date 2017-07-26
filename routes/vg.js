const express = require('express')
const router = express.Router();
const queries = require('../queries')
const knex = require('../knex')

router.get('/', (req, res, next) => {
  knex('played_video_games')
  .then((allGames) => {
    res.json(allGames)
  })
})

router.get('/:id', (req, res) => {
  let id = req.params.id
  knex('played_video_games')
  .where('id', id)
  .first()
  .then((videogame) => {
    res.json(videogame)
  })
})

// router.post('/', (req, res) =>{
//
// })
 module.exports = router
