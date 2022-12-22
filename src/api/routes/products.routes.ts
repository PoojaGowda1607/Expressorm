import express from 'express';
import { Product } from '../../models/product.model';
import productController from '../controllers/product.controller';
import { CommonRoutes } from './common.routes';
import productsMiddleware from '../controllers/products.middleware';

export class ProductRoutes extends CommonRoutes{
    constructor (app: express.Application) {
        super(app, "ProductsRoute");
    }
    
    configureRoutes(): express.Application {
        // http://localhost:3000/products

        this.app.route('/products')
            .get(productController.listProducts)
            .post(productsMiddleware.validateRequestProductBodyFields,
                productController.createProduct);

            // https://localhost:3000/products/2
            this.app.route('/products/:id')
                .all((req:express.Request, res: express.Response, next: express.NextFunction) =>{
                    next();
                })
                .get(productController.getProductById)
                .put((req:express.Request, res: express.Response) => {
                    res.status(200).send(`PUT requested for id ${req.params.id}`);
                })
                .delete((req:express.Request, res: express.Response) => {
                    res.status(200).send(`DELETE requested fro id ${req.params.id}`);
                });

            return this.app;
    }
}