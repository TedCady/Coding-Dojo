const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Database connection established'))
    .catch(err => console.log('Error within mongoose.config.js', err));