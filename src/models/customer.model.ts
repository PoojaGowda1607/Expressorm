import { Model, DataTypes, HasManyGetAssociationsMixin } from "sequelize";
import { connection } from "../config/connection";
import { Order } from "./order.model";

export class Customer extends Model {
    public email!:string;
    public firstName!:string;
    public getOrders!:HasManyGetAssociationsMixin<Order>;
}

Customer.init({
    email: {
        type: DataTypes.STRING(100),
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING(128),
        allowNull:false,
        field: "first_name"
    }
},
{
    tableName: "customers",
    timestamps: false,
    sequelize: connection
})