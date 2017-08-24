const express = require('express')
const router = express.Router();
const knex = require('../knex')
const bodyParser =require('body-parser')

router.get('/', (req, res, next) => {
  knex('video_games')
  .then((allGames) => {
    res.json(allGames)
  })
})

function validGames(data) {
  let validTitle = data.name.trim() != '';
  let validPlatform = data.platform.trim() != '';
  return validTitle && validPlatform
}

router.get('/:id', (req, res) => {
  let id = req.params.id
  knex('video_games')
  .where('id', id)
  .first()
  .then((videogame) => {
    res.json(videogame)
  })
})

router.post('/', (req, res) =>{
  let newGame = req.body
  if (validGames(newGame)) {
    knex('video_games')
    .insert(newGame)
    .returning('*')
    .then((newGame) => {
      res.json(newGame)
    })
  } else {
    res.json({message: 'Invalid Entry'})
  }
})

router.put('/:id', (req, res) => {
  let id = req.params.id
  let edit = req.body
  if (validGames(edit)) {
    knex('video_games')
    .where('id', id)
    .update(edit)
    .returning('*')
    .then((edited) => {
      res.json(edited)
    })
  }else {
    res.json({message: 'Invalid Entry'})
  }
})

router.delete('/:id', (req, res) => {
  let id = req.params.id
  knex('video_games')
  .where('id', id)
  .del()
  .then((deleted) => {
    res.json({
      message: 'Video Game Deleted'
    })
  })
})
 module.exports = router
