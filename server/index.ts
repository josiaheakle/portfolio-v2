
import {router as demoRoute} from "./routes/demo";
import * as Express from "express";
import * as Path from 'path';


let cors = require('cors');
let messageRoute = require('./routes/message.js');



let app = Express();

app.use(cors(
  // origin: ['https://www.josiaheakle.com', 'https://localhost:8000']
));

app.use(Express.json());

app.use(Express.static(Path.join(Path.dirname(__dirname), 'josiah-eakle-development', 'public')));
app.use((req : Express.Request, res : Express.Response, next : Function) => {
  console.log(`REQUEST AT ${req.path}`);
  next();
})

app.use('/message', messageRoute);
app.use('/demo', demoRoute);

app.use((req, res, next) => {
  res.status(301).redirect('/');
})


app.listen(process.env.PORT || 4000);


module.exports = app;
