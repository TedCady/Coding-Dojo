const AuthorController = require('../controllers/author.controller');

module.exports = app => {
    app.post('/api/authors/create', AuthorController.createNew);
    app.get('/api/authors/', AuthorController.findAll);
    app.get('/api/authors/:id', AuthorController.findOne);
    app.put('/api/authors/update/:id', AuthorController.updateOne);
    app.delete('/api/authors/delete/:id', AuthorController.deleteOne);
}