import  express  from "express";

import {Server, createServer} from 'http';
import cors from 'cors';
import { getAllJSDocTags, server } from "typescript";
import { CommonRoutes } from "./routes/common.routes";
import { ProductRoutes } from "./routes/products.routes";
import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import { format } from "mysql2";

const app: express.Application = express(); //middleware frame work for RESTfull web services

const server:Server = createServer(app);

const port:number = 3000;

const routes:Array<CommonRoutes> = [];

// configure middleware
app.use(express.json());
app.use(cors());

// Logger configuration

const loggerOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({all:true})
    )   
};

app.use(expressWinston.logger(loggerOptions));

// End logger configuration

routes.push(new ProductRoutes(app));

const msg = `Server running at http://localhost:${port}`;

app.get("/", (req:express.Request, res: express.Response) =>{
    res.status(200).send(msg);
});

server.listen(port, () => console.log(msg));
