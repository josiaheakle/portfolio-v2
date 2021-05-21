
let path = require('path');
let cors = require('cors');
let express = require('express');
let messageRoute = require('./routes/message.js');


let app = express();

app.use(cors({
  origin: 'https://www.josiaheakle.com'
}));

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

/*
  /message
*/

app.use('/message', messageRoute);


app.listen(process.env.PORT || 4000)


module.exports = app;
