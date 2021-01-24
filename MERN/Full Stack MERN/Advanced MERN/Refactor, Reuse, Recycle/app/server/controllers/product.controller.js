const {Product} = require('../models/product.model');

module.exports.findAll = (req, res) => {
    Product.find()
        .then(output => res.json(output))
        .catch(err => res.json({ message: err}));
};

module.exports.findOne = (req, res) => {
    Product.findById(req.params.id)
        .then(output => res.json(output))
        .catch(err => res.json({ message: err}));
};

module.exports.createNew = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({
        title: title,
        price: price,
        description: description
    })
        .then(product => res.json(product))
        .catch(err => res.json(`Error: ${err}`));
};

module.exports.updateOne = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(output => res.json({ product: output }))
        .catch(err => res.json({ message: err}));
};

module.exports.deleteItem = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json(err));
};
