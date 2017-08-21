const auth = require('../utils/auth')

exports.seed = function(knex, Promise) {

  return knex('users').del()
    .then(function () {

      var password1 = auth.hashSyncPassword('MasterChief')
      var password2 = auth.hashSyncPassword('jonathanS')

      return knex('users').insert([
        {id: 1, name:'Mo', email: 'mo@mo.com', password: password2 },
        {id: 2, name:'Jonathan', email: 'js@js.com', password: password1 }
      ]);
    });
};
