
exports.up = function(knex, Promise) {
    return knex.schema.createTable('books_table', (book) => {
        book.increments('id')
        book.string('title')
        book.string('genre')
        book.text('desc')
        book.string('cover')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('books_table')
};
