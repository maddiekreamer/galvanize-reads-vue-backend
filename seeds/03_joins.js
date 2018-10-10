
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('joins_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('joins_table').insert([
        {bookId: 1, authorId: 1},
        {bookId: 1, authorId: 5},
        {bookId: 1, authorId: 6},
        {bookId: 2, authorId: 2},
        {bookId: 3, authorId: 3},
        {bookId: 4, authorId: 4},
        {bookId: 5, authorId: 5},
        {bookId: 6, authorId: 6}
      ]);
    });
};
