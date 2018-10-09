
exports.up = function(knex, Promise) {
    return knex.schema.createTable('joins_table', (join) => {
        join.increments('id')
        join.integer('authorId').unsigned()
        join.foreign('authorId').references('authors_table.id')
        join.integer('bookId').unsigned()
        join.foreign('bookId').references('books_table.id')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('joins_table')
};
