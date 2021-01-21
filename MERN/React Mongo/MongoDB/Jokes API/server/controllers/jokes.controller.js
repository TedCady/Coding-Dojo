const Joke = require('../models/jokes.model');

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(results => res.json({jokes: results}))
        .catch(err => res.json({message: 'Error:', error: err}))
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
        .then(results => res.json({joke: results}))
        .catch(err => res.json({message: 'Error:', error: err}))
}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(results => res.json({joke: results}))
        .catch(err => res.json({message: 'Error:', error: err}))
}

module.exports.updateJoke = (req, res) => {
    Joke.create({_id: req.params.id}, req.body, {new:true})
        .then(results => res.json({joke: results}))
        .catch(err => res.json({message: 'Error:', error: err}))
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
        .then(results => res.json({joke: results}))
        .catch(err => res.json({message: 'Error:', error: err}))
}