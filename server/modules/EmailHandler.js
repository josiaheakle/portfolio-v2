let nodemailer = require('nodemailer')

const EmailHandler = (() => {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_FROM,
          pass: process.env.EMAIL_PASS
        }
    });

    const sendMessage = (name, email, message) => {
        console.log(`trying to send message`)
        var options = {
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_TO,
            subject: `New Message from ${name}`,
            text: `${name} : ${email}\n${message}`
        };
        transporter.sendMail(options, (error, info) => {
            if(error) {
                console.error(error);
            } else {
                console.log(info);
            }
        })
    }

    return{
        sendMessage: sendMessage
    }

})();

module.exports = EmailHandler;