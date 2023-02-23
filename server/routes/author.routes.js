const AuthorController = require('../controllers/author.controller');

module.exports = app => {
    app.get('/api/allAuthors', AuthorController.allAuthors)
    app.post('/api/createAuthor', AuthorController.createAuthor)
    app.get('/api/oneAuthor/:id', AuthorController.getOneAuthor)
    app.put('/api/editAuthor/:id', AuthorController.editAuthor)
    app.delete('/api/deleteAuthor/:id', AuthorController.deleteAuthor)
}