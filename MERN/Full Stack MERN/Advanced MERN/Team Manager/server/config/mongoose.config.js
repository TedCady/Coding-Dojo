const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/app',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('server/config/mongoose.config: connection to database established'))
    .catch(err => console.log('server.config.mongoose.config: ' + err))