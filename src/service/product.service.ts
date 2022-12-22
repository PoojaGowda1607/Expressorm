import { Product } from "../models/product.model";

class ProductService {

    getProducts(): Promise<Product[]>{
        return Product.findAll();
    }

    getProductById(id:number) : Promise<Product | null> {
       return Product.findByPk(id); 
    }

    addProduct(p:any): Promise<Product>{
        return Product.create(p);
    }

    getProductByCategory(cat: string) : Promise<Product[] | []>{
        return Product.findAll({
            where: {category : cat}
        })
    }
}

export default new ProductService();  //singleton object