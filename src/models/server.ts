import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import routesProducto from '../routes/producto';
import db from '../db/connection';

class Server {

    private app: Application;
    private port: string;
    
    constructor(){
        this.app = express();
        this.port = '3006';
        this.listen();
        this.midlewares();
        this.router();
        this.dbConnect();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Escuchando puerto ${this.port}`);
        });
    }

    router(){
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'API CORRIENDO'
            })
        })
        this.app.use('/api/productos', routesProducto);
    }

    midlewares(){

        //parseamos el body
        this.app.use(express.json());

        //Cors
        this.app.use(cors());

    }

    async dbConnect() {
        try {
            await db.authenticate();
            console.log('Base de datos conectada');
        } catch (error) {
            console.log(error);
            console.log('Error al conectarse a la base de datos');
        }
    }
}



export default Server;