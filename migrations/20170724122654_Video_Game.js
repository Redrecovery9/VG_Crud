
exports.up = function(knex, Promise) {
  return knex.schema.createTable('played_video_games', (table) =>{
    table.increments(),
    table.text('name'),
    table.text('platform'),
    table.boolean('beaten'),
    table.integer('rating')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('played_video_games')
};
