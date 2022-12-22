import {Model, DataTypes} from 'sequelize';
import { connection } from '../config/connection';

export class Product extends Model{
    public id!:number;
    public name!:string;
    public price!:number;
    public category!:string;
}

Product.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name : {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
    price: {
        type: new DataTypes.DOUBLE
    },
    category: {
        type: new DataTypes.STRING(128)
    }
}, {
    tableName: "products",
    timestamps: false,
    sequelize: connection
});