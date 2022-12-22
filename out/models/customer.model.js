"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = require("../config/connection");
class Customer extends sequelize_1.Model {
}
exports.Customer = Customer;
Customer.init({
    email: {
        type: sequelize_1.DataTypes.STRING(100),
        primaryKey: true
    },
    firstName: {
        type: sequelize_1.DataTypes.STRING(128),
        allowNull: false,
        field: "first_name"
    }
}, {
    tableName: "customers",
    timestamps: false,
    sequelize: connection_1.connection
});
//# sourceMappingURL=customer.model.js.map