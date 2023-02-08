import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import restaurantRouter from './routes/restaurantRouter.js';

const PORT = 5000;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/', restaurantRouter);

app.listen(PORT, '192.168.100.131', ()=>console.log('Listening on port: '+PORT));