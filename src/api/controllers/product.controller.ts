import { Request, Response} from 'express';
import ProductService from '../../service/product.service';

class ProductController{
    async listProducts(req:Request, res:Response) {
        const products = await ProductService.getProducts();
        res.status(200).send(products);
    }

    async getProductById(req:Request, res:Response) {
        const product = await ProductService.getProductById(+req.params.id);
        res.status(200).send(product);
    }

    async createProduct(req:Request, res:Response) {
        const product = await ProductService.addProduct(req.body);
        res.status(201).send(product);
    }
}

export default new ProductController();