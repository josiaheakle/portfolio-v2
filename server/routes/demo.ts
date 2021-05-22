import * as Express from "express";
import * as Path from 'path';

const router = Express.Router();

router.use("/directive", Express.static(Path.join(Path.dirname(__dirname), 'demos', 'directive')));

router.get('/directive', (req : Express.Request, res : Express.Response, next : Function) => {

    res.status(200).sendFile('index.html', {root:  Path.join(Path.dirname(__dirname), 'demos', 'directive')});

})

router.use("/landed", Express.static(Path.join(Path.dirname(__dirname), 'demos', 'landed')));

router.get('/landed', (req : Express.Request, res : Express.Response, next : Function) => {

    res.status(200).sendFile('index.html', {root:  Path.join(Path.dirname(__dirname), 'demos', 'landed')});

})

router.use("/etherial", Express.static(Path.join(Path.dirname(__dirname), 'demos', 'etherial')));

router.get('/etherial', (req : Express.Request, res : Express.Response, next : Function) => {

    res.status(200).sendFile('index.html', {root:  Path.join(Path.dirname(__dirname), 'demos', 'etherial')});

})

router.use("/strata", Express.static(Path.join(Path.dirname(__dirname), 'demos', 'strata')));


router.get('/strata', (req : Express.Request, res : Express.Response, next : Function) => {

    res.status(200).sendFile('index.html', {root:  Path.join(Path.dirname(__dirname), 'demos', 'strata')});

})

export {router};
