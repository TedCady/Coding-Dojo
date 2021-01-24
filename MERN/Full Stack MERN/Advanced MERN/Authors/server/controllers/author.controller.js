const { Author } = require('../models/author.model');

module.exports.createNew = (req, res) => {
    const { name } = req.body;
    Author.create({ name })
        .then(author => res.json(author))
        .catch(err => res.status(400).json('server/controllers/author.controller.findOne: ' + err))
}

module.exports.findAll = (req, res) => {
    Author.find()
        .then(author => res.json(author))
        .catch(err => res.status(400).json('server/controllers/author.controller.findAll: ' + err))
}

module.exports.findOne = (req, res) => {
    Author.findById(req.params.id)
        .then(author => res.json(author))
        .catch(err => res.status(400).json('server/controllers/author.controller.findOne: ' + err))
}

module.exports.updateOne = (req, res) => {
    Author.updateOne({ _id: req.params.id }, req.body, { new: true })
        .then(author => res.json(author))
        .catch(err => res.status(400).json('server/controllers/author.controller.updateOne: ' + err))
}

module.exports.deleteOne = (req, res) => {
    Author.findByIdAndDelete(req.params.id)
        .then(author => res.json(author))
        .catch(err => res.status(400).json('server/controllers/author.controller.deleteOne: ' + err))
}