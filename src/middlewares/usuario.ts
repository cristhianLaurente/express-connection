import {Request, Response} from 'express';
import { Usuario } from '../config/sequelize';


export const getUsers = (req: Request, res: Response) => {

    Usuario.findAll()
        .then( (users: any) => {
            res.json({
                ok: true,
                content: users
            })
        }).catch( (err: any) => {
            res.json({
                ok: false,
                content: err
            })
        })
}