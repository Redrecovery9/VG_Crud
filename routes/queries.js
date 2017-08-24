const knex = require('../knex')

module.exports = {
  getUser: function() {
    return knex('users').select();
  },
  getUserByEmail: email => {
    return knex('users').select().where('email',email)
  },
  createUser: user => {
    return knex('users').insert(user).returning('id')
      .then(id => {
        user.id = id[0]
        return user;
      })
  },
  getgamesByUserId: id => {
    return knex('video_games')
      .select('id', '*')
      .where('users_id', id)
  },
}
