"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const sequelize_1 = require("sequelize");
const db = "product";
const username = "root";
const password = "Tiger@123";
exports.connection = new sequelize_1.Sequelize(db, username, password, {
    dialect: "mysql",
    port: 3306,
    pool: {
        min: 1,
        max: 5,
        idle: 1000
    },
    logging: true
});
//Promise
exports.connection.authenticate()
    .then(() => console.log("mysql connected!!!"))
    .catch(err => console.log(err));
//# sourceMappingURL=connection.js.map