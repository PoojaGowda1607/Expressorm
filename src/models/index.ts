import { Customer } from "./customer.model";
import { Product } from "./product.model";
import { Order } from "./order.model";
import { Item } from "./item.model";
import { connection } from "../config/connection";

export * from './customer.model';
export * from './item.model';
export * from './order.model';
export * from './product.model';

// relationship between models / entity / domain

Customer.hasMany(Order, {foreignKey: "customer_fk"}); //one to many
Order.belongsTo(Customer, {foreignKey: "customer_fk"}); //many to one

Order.hasMany(Item, {
    foreignKey: "order_fk", // dont use different foregin key it will be redident
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

Item.belongsTo(Order, {foreignKey: "order_fk"});
Item.belongsTo(Product, {foreignKey: "product_fk"});

connection.sync();

