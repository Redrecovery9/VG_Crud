
exports.seed = function(knex, Promise) {
  return knex('played_video_games').del()
    // knex.raw('DELETE FROM "played_video_games"; ALTER SEQUENCE played_video_games_id_seq RESTART WITH 6;')
    .then(function () {
      return knex('played_video_games').insert([
        {name: 'Halo 3 ', platform: 'Xbox360', beaten: 'true', rating: '5'},
        {name: 'Skyrim', platform: 'Xbox360 / XboxOne', beaten: 'false', rating: '5'},
        {name: 'Forza 6', platform: 'XboxOne', beaten: 'false', rating: '5'},
        {name: 'CoD Black Ops 3', platform: 'XboxOne', beaten: 'true', rating: '2'},
        {name: 'StarCraft 2', platform: 'PC', beaten: 'false', rating: '4'}
      ]);
    });
};
