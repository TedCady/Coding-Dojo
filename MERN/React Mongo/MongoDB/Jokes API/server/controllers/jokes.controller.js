const Joke = require('../models/jokes.model');

let errLoc = 1

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(results => res.json({jokes: results}))
        .catch(err => res.json({message: `Error in .controllers location: ${errLoc}`, error: err}))
}
module.exports.findOneJoke = (req, res) => {
    errLoc = 2;
    Joke.findOne({_id: req.params.id})
        .then(results => res.json({joke: results}))
        .catch(err => res.json({message: `Error in .controllers location: ${errLoc}`, error: err}))
}
module.exports.createJoke = (req, res) => {
    errLoc = 3;
    Joke.create(req.body)
        .then(results => res.json({joke: results}))
        .catch(err => res.json({message: `Error in .controllers location: ${errLoc}`, error: err}))
}
module.exports.updateJoke = (req, res) => {
    errLoc = 4;
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(results => res.json({joke: results}))
        .catch(err => res.json({message: `Error in .controllers location: ${errLoc}`, error: err}))
}
module.exports.deleteJoke = (req, res) => {
    errLoc = 5;
    Joke.deleteOne({_id: req.params.id})
        .then(results => res.json({joke: results}))
        .catch(err => res.json({message: `Error in .controllers location: ${errLoc}`, error: err}))
}