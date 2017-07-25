const knex = require('./knex')

module.exports = {
  getVideoGames: function() {
    return knex('played_video_games')
  }
}
