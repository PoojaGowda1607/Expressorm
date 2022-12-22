"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = require("../config/connection");
class Order extends sequelize_1.Model {
}
exports.Order = Order;
Order.init({
    oid: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    order_date: {
        type: sequelize_1.DataTypes.DATE,
        field: "order_date"
    },
    total: {
        type: sequelize_1.DataTypes.DOUBLE
    }
}, {
    tableName: "orders",
    timestamps: false,
    sequelize: connection_1.connection
});
//# sourceMappingURL=order.model.js.map