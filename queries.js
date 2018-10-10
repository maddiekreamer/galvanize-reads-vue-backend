const connection = require('./knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(connection)

getBooks = () => database.select().from('books_table').orderBy('id', 'desc')

getAuthors = (id) => database.select().from('authors_table').orderBy('id', 'desc')

module.exports = {
    getBooks,
    getAuthors
}