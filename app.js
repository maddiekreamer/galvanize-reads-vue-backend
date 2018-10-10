const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const queries = require('./queries');
const cors = require("cors")

app.use(cors())

app.get("/books", (request, response) => {
    queries.getBooks().then(result => response.json({
        result
    }))
});

app.get("/authors", (request, response) => {
    queries.getAuthors().then(result => response.json({
        result
    }))
});

app.listen(port, () => {
    console.log(`listening on ${port}`);
})