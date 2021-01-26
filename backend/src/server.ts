import express from 'express';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';
import errorHandler from './erros/handler';
import routes from './routes';

const app = express();
const port = process.env.PORT || 3333

app.use(express.json());
app.use(cors())
app.use(routes);
app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`App running at port ${port}`)
});