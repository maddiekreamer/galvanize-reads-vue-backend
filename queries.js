const connection = require('./knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(connection)

const getBooks = () => database('books_table').orderBy('id', 'desc')

const getAuthors = () => database.select().from('authors_table').orderBy('id', 'desc')

module.exports = {
    getBooks,
    getAuthors
}