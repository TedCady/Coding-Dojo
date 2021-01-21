const express = require('express');
const app = express();

require('../server/config/mongoose.config');

app.use(express.json(), express.urlencoded({extended:true}));

const Routes = require('../server/routes/jokes.routes');
Routes(app);

app.listen(8000, () => console.log('Connection to port 8000 established'))