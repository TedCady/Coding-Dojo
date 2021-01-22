const ProductController = require('../controllers/product.controller');

module.exports = app => {
    app.get('/api/products/', ProductController.findAll);
    app.get('/api/products/:id', ProductController.findOne);
    app.put('/api/products/update/:id', ProductController.updateOne);
    app.post('/api/products/new/', ProductController.createNew);
    app.delete('/api/products/delete/:id', ProductController.deleteItem);
}