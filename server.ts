import express, { Express, Request, Response } from 'express';
const cors = require('cors');
const app : Express = express();
const port = 5000;

const itemRouter = require('./api')

app.use(cors());

app.use('/api', itemRouter);

app.listen(port , () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
})
