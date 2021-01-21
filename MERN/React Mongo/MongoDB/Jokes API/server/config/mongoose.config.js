const mongoose = require('mongoose');
// jokesapi is the variable database mongoose connects to.
// if database doesn't exist, mongoose will automatically create it.
mongoose.connect('mongodb://localhost/jokesapi', { 
    // these options get rid of deprecation messages in the console.
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => console.log('Connection to database established'))
    .catch(err => console.log('Error:', err));
