import { Model, DataTypes, HasOneGetAssociationMixin } from "sequelize";
import { connection } from "../config/connection";
import { Product } from "./product.model";

export class Item extends Model{
    public itemid!:number;
    public amount!:number;
    public qty!:number;
    public getProduct!:HasOneGetAssociationMixin<Product>;
};

Item.init({
    itemid: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    amount: {
        type: DataTypes.DOUBLE,
        validate:{
            min: 0    
        }        
    },
    qty:{
        type: DataTypes.INTEGER
    }  
}, {
    tableName: "items",
    timestamps:false,
    sequelize: connection
})