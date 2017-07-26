const express = require('express')
const router = express.Router();
const queries = require('../queries')
const knex = require('../knex')
const bodyParser =require('body-parser')

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

router.post('/', (req, res) =>{
  let newGame = req.body
  knex('played_video_games')
  .insert(newGame)
  .returning('*')
  .then((newGame) => {
    res.json(newGame)
  })
})
 module.exports = router
