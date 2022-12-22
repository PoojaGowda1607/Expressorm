import { Model, DataTypes, HasManyAddAssociationMixin, HasManyGetAssociationsMixin } from "sequelize";
import { connection } from "../config/connection";
import { Item } from "./item.model";

export class Order extends Model {
    public oid!: number;
    public order_date!: string;
    public total!: number;
    public addItem!: HasManyAddAssociationMixin<Item,number>;  //This are helper method for queries
    public getItems!: HasManyGetAssociationsMixin<Item>;
}

Order.init({
    oid : {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement:true,
        primaryKey: true
    },
    order_date : {
        type: DataTypes.DATE,
        field: "order_date"
    },
    total : {
        type: DataTypes.DOUBLE
    }
},{
    tableName: "orders",
    timestamps: false,
    sequelize: connection
})