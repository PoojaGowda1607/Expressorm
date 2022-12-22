"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_model_1 = require("../models/product.model");
class ProductService {
    getProducts() {
        return product_model_1.Product.findAll();
    }
    getProductById(id) {
        return product_model_1.Product.findByPk(id);
    }
    addProduct(p) {
        return product_model_1.Product.create(p);
    }
    getProductByCategory(cat) {
        return product_model_1.Product.findAll({
            where: { category: cat }
        });
    }
}
exports.default = new ProductService(); //singleton object
//# sourceMappingURL=product.service.js.map