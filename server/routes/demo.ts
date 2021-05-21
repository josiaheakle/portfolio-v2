import * as Express from "express";
import * as Path from 'path';

const route = Express.Router();

Path.dirname

route.get('/', (req : Express.Request, res : Express.Response, next : Function) => {
    
    res.status(200).sendFile('demos/test.html', {root:  Path.dirname(__dirname)})
})

export {route};
