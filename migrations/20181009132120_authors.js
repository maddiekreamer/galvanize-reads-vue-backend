
exports.up = function(knex, Promise) {
    return knex.schema.createTable('authors_table', (author) => {
        author.increments('id')
        author.string('firstName')
        author.string('lastName')
        author.string('bio')
        author.string('portrait')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('authors')
};
