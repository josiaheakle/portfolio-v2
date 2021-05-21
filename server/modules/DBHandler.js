const mongoose = require('mongoose');
const MessageModel = require('../models/MessageModel.js');

require('dotenv').config();

const DBHandler = (() => {

    mongoose.set('useNewUrlParser', true);
    mongoose.set('useUnifiedTopology', true);
    mongoose.connect(process.env.DATABASE_URL, { useFindAndModify: false });
    const db = mongoose.connection;
    db.on('error', (error) => console.error(error));
    db.once('open', () => console.log('Connected to database.'));

    const saveMessage = async (name, email, message) => {

        console.log(`trying to save message`)

        let m = new MessageModel({
            name: name,
            email: email,
            message: message
        })

        let res = await m.save();
        
        console.log(res)

    }

    return {
        saveMessage: saveMessage
    }

})();

module.exports = DBHandler;