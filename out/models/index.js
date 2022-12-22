"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
const customer_model_1 = require("./customer.model");
const product_model_1 = require("./product.model");
const order_model_1 = require("./order.model");
const item_model_1 = require("./item.model");
const connection_1 = require("../config/connection");
__exportStar(require("./customer.model"), exports);
__exportStar(require("./item.model"), exports);
__exportStar(require("./order.model"), exports);
__exportStar(require("./product.model"), exports);
// relationship between models / entity / domain
customer_model_1.Customer.hasMany(order_model_1.Order, { foreignKey: "customer_fk" }); //one to many
order_model_1.Order.belongsTo(customer_model_1.Customer, { foreignKey: "customer_fk" }); //many to one
order_model_1.Order.hasMany(item_model_1.Item, {
    foreignKey: "order_fk",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
item_model_1.Item.belongsTo(order_model_1.Order, { foreignKey: "order_fk" });
item_model_1.Item.belongsTo(product_model_1.Product, { foreignKey: "product_fk" });
connection_1.connection.sync();
//# sourceMappingURL=index.js.map