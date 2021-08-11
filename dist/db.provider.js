"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProvider = void 0;
const sequelize_1 = require("sequelize");
exports.databaseProvider = [
    {
        provide: 'SEQUELIZE',
        userFactory: async () => {
            const sequelize = new sequelize_1.Sequelize({
                dialect: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'root',
                database: 'nest-project',
            });
            sequelize.addModels();
        },
    },
];
//# sourceMappingURL=db.provider.js.map