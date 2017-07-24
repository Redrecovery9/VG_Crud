
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('played_video_games').del()
    .then(function () {
      // Inserts seed entries
      return knex('played_video_games').insert([
        {id: 1, name: 'Halo 3 ', platform: 'Xbox360', beaten: 'true', rating: '5'},
        {id: 2, name: 'Skyrim', platform: 'Xbox360 / XboxOne', beaten: 'false', rating: '5'},
        {id: 3, name: 'Forza 6', platform: 'XboxOne', beaten: 'false', rating: '5'},
        {id: 4, name: 'CoD Black Ops 3', platform: 'XboxOne', beaten: 'true', rating: '2'},
        {id: 5, name: 'StarCraft 2', platform: 'PC', beaten: 'false', rating: '4'}
      ]);
    });
};
