import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { sequelize } from './ORM/sequelize';
import router from './routes';
//-- creating express app
const app = express();
//-- Initializing ORM
sequelize.sync()
//-- Enabeling cors
app.use(cors());
//-- Acepting json
app.use(express.json());
//-- x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//-- Status endpoint
app.use("/api/v1", router);

export default app;
