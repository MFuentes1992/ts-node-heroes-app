import { heroModel } from './../models/heroModel';
import {Sequelize, Dialect} from "sequelize";
import dbConfig from "../config-utils/db.config";

//-- Getting DB config
const {database, username, password, host, dialect} = dbConfig;

//-- Creating a new instance of sequelize
export const sequelize = new Sequelize(
    database,
    username,
    password,
    {
        host,
        dialect: dialect as Dialect
    }
);

//-- Creating the hero model
export const HeroModel = heroModel(sequelize);