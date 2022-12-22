"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const product_controller_1 = __importDefault(require("../controllers/product.controller"));
const common_routes_1 = require("./common.routes");
const products_middleware_1 = __importDefault(require("../controllers/products.middleware"));
class ProductRoutes extends common_routes_1.CommonRoutes {
    constructor(app) {
        super(app, "ProductsRoute");
    }
    configureRoutes() {
        // http://localhost:3000/products
        this.app.route('/products')
            .get(product_controller_1.default.listProducts)
            .post(products_middleware_1.default.validateRequestProductBodyFields, product_controller_1.default.createProduct);
        // https://localhost:3000/products/2
        this.app.route('/products/:id')
            .all((req, res, next) => {
            next();
        })
            .get(product_controller_1.default.getProductById)
            .put((req, res) => {
            res.status(200).send(`PUT requested for id ${req.params.id}`);
        })
            .delete((req, res) => {
            res.status(200).send(`DELETE requested fro id ${req.params.id}`);
        });
        return this.app;
    }
}
exports.ProductRoutes = ProductRoutes;
//# sourceMappingURL=products.routes.js.map