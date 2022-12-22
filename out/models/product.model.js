"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = require("../config/connection");
class Product extends sequelize_1.Model {
}
exports.Product = Product;
Product.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false
    },
    price: {
        type: new sequelize_1.DataTypes.DOUBLE
    },
    category: {
        type: new sequelize_1.DataTypes.STRING(128)
    }
}, {
    tableName: "products",
    timestamps: false,
    sequelize: connection_1.connection
});
//# sourceMappingURL=product.model.js.map