"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("../config/connection");
const product_model_1 = require("../models/product.model");
function printAll() {
    //Product.findAll({where: { [Op.and] :[{category: 'mobile'}, {price: 12490}] }}).then( products =>{
    //Product.findAll({where: { category: 'mobile'}}).then( products =>{
    product_model_1.Product.findAll().then(products => {
        products.forEach(p => {
            console.log(p.id + "," + p.name + "," + p.category);
        });
    });
}
//printAll();
console.log("*************");
function printNameAndPrice() {
    product_model_1.Product.findAll({ attributes: ['name', 'price'] }).then(elems => {
        elems.forEach(p => console.log(p.getDataValue("name"), p.getDataValue("price")));
        //console.log(elems);
        connection_1.connection.close();
    });
}
//printNameAndPrice();
function getAll() {
    return __awaiter(this, void 0, void 0, function* () {
        const products = yield product_model_1.Product.findAll();
        return products;
    });
}
function print() {
    return __awaiter(this, void 0, void 0, function* () {
        // const products = await getAll();
        // products.forEach(p => console.log(p.name));
        const max = yield product_model_1.Product.max("price");
        //const sum = await Product.sum("price");
        const sum = yield product_model_1.Product.sum("price", { where: { category: 'mobile' } });
        console.log(max, sum);
        console.log("***************");
        product_model_1.Product.findAll({
            attributes: ['category', 'name',]
        });
    });
}
print();
//# sourceMappingURL=first.js.map