import express, { Request, Response } from 'express';
const router = express.Router();
const {getItems, getItem} = require('./request');

router.get('/items', (req: Request, res: Response) => {
    const query: any = req.query.q
    const response = getItems(query)
        .then((data: any) => res.json(data));
});

router.get('/item/:id', (req: Request, res: Response) => {
    const query: String = req.params.id
    const response = getItem(query)
        .then((data: any) => res.json(data));
})


module.exports = router;
