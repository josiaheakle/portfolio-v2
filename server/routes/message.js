const e = require('cors');
let express = require('express');
const DBHandler = require('../modules/DBHandler.js');
const EmailHandler = require('../modules/EmailHandler.js');
const router = express.Router();

router.post('/', async (req, res, next) => {

    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    
    console.log(`NEW MESSAGE @ {${Date()}`);

    console.log(`Name    : ${name}`);
    console.log(`Email   : ${email}`);
    console.log(`Message : ${message}`);

    let ret = await DBHandler.saveMessage(name, email, message);
    EmailHandler.sendMessage(name, email, message);
    
    res.send('Message Sent');

})

module.exports = router;
