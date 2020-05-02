import {Sequelize} from 'sequelize';
import { usuario_model } from '../models/usuario';

export const connection: Sequelize = new Sequelize('name_db','name_root','pass_root', 
    {host: 'localhost:3000', dialect: 'mysql', logging: console.log, 
    dialectOptions:{useUTC: false, dateStrings: true, typeCast: true}, }
)

export const Usuario = usuario_model(connection);