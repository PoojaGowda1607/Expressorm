import express from 'express';

class ProductMiddleWare {
    async validateRequestProductBodyFields (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        if(req.body && req.body.name && req.body.price && req.body.category) {
            next();
        } else {
            res.status(400).send({error : 'Missing required fields of product'})
        }
    }
}

export default new ProductMiddleWare();