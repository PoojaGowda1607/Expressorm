"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = require("../config/connection");
class Item extends sequelize_1.Model {
}
exports.Item = Item;
;
Item.init({
    itemid: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    amount: {
        type: sequelize_1.DataTypes.DOUBLE,
        validate: {
            min: 0
        }
    },
    qty: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    tableName: "items",
    timestamps: false,
    sequelize: connection_1.connection
});
//# sourceMappingURL=item.model.js.map