import express, { Application,Request ,Response, NextFunction } from 'express';
import {mainRouter} from './routes/main';

const app:Application = express();


app.use(mainRouter);

app.listen(3000,()=>console.log('listen to 3000'));