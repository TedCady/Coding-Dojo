const { Product } = require('../models/product.model');
module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    });
}

let errLoc = 1
module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(results => res.json({products: results}))
        .catch(err => res.json({message: `Error in .controllers location: ${errLoc}`, error: err}))
}

module.exports.findOneProduct = (req, res) => {
    errLoc = 2;
    Product.findOne({_id: req.params.id})
        .then(results => res.json({product: results}))
        .catch(err => res.json({message: `Error in .controllers location: ${errLoc}`, error: err}))
}

module.exports.createProduct = (req, res) => {
    errLoc = 3;
    Product.create(req.body)
        .then(results => res.json({product: results}))
        .catch(err => res.json({message: `Error in .controllers location: ${errLoc}`, error: err}))
}

module.exports.updateProduct = (req, res) => {
    errLoc = 4;
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(results => res.json({product: results}))
        .catch(err => res.json({message: `Error in .controllers location: ${errLoc}`, error: err}))
}

module.exports.deleteProduct = (req, res) => {
    errLoc = 5;
    Product.deleteOne({_id: req.params.id})
        .then(results => res.json({product: results}))
        .catch(err => res.json({message: `Error in .controllers location: ${errLoc}`, error: err}))
}