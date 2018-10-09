
exports.up = function(knex, Promise) {
    return knex.schema.createTable('joins_table', (join) => {
        join.increments('id')
        join.integer('authorId')
        join.integer('bookId')

        join.foreign('authorId').references('id').inTable('authors')
        join.foreign('bookId').references('id').inTable('books');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('joins')
};
