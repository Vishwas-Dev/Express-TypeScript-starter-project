import express from 'express';
import pingRouter from './ping.router.js';

const v1Router = express.Router();

v1Router.use('/pong', pingRouter);


export default v1Router;


