const { Author } = require('../models/author.model');

module.exports.createNew = (req, res) => {
    Author.create({ name: req.body.name })
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
}

module.exports.findAll = (req, res) => {
    Author.find()
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
}

module.exports.findOne = (req, res) => {
    Author.findById(req.params.id)
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
}

module.exports.updateOne = (req, res) => {
    Author.updateOne({ _id: req.params.id }, req.body, { new: true })
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteOne = (req, res) => {
    Author.findByIdAndDelete(req.params.id)
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
}