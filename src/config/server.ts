import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import { connection } from './sequelize';
import { usuario_router } from '../routes/usuario';

export class Server  {

    public app: express.Application;
    public port: any = 3000;
    constructor() {
        this.app = express();
        this.settings__cors();
        this.settings__bodyParser();
        this.settings__routes();
    }

    settings__cors = () =>{
        this.app.use((req, res, next) => {
          res.header('Access-Control-Allow-Origin', '*');
          res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
          res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
          res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
          next();
      });
    }

    settings__bodyParser = () => {
        this.app.use(bodyParser.json());
    }

    settings__routes = () => {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                ok: true,
                message: 'The server is active'
            })
        });


        // rutas aqui
        // this.app.use('', nombredelarchivo )
        this.app.use('', usuario_router )
    }

    start__server = () => {
        this.app.listen(this.port, ()=>{
            console.log(`the server is running on the port http://localhost:${this.port}`);
            connection.sync({ force: false, alter: true })
            .then(()=>{console.log("== BD created successfully ==");})
            .catch((error:any)=>{console.log("== error creating BD ==");
                                 console.log(error);
            })
        })
    }

}