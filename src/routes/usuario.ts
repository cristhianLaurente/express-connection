import {Router} from 'express';
import { getUsers } from '../middlewares/usuario';

export const usuario_router = Router();
usuario_router.get('/users', getUsers )