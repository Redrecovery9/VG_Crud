
exports.seed = function(knex, Promise) {
  return knex('video_games').del()
    // knex.raw('DELETE FROM "played_video_games"; ALTER SEQUENCE played_video_games_id_seq RESTART WITH 6;')
    .then(function () {
      return knex('video_games').insert([
        {name: 'Halo 3 ', platform: 'Xbox360', beaten: 'true', rating: '5', users_id: 1},
        {name: 'Skyrim', platform: 'Xbox360 / XboxOne', beaten: 'false', rating: '5', users_id: 2},
        {name: 'Forza 6', platform: 'XboxOne', beaten: 'false', rating: '5', users_id: 1},
        {name: 'CoD Black Ops 3', platform: 'XboxOne', beaten: 'true', rating: '2', users_id: 2},
        {name: 'StarCraft 2', platform: 'PC', beaten: 'false', rating: '4', users_id: 1}
      ]);
    });
};
