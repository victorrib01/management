"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCategory1603511150099 = void 0;
const typeorm_1 = require("typeorm");
class createCategory1603511150099 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'categories',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('categories');
    }
}
exports.createCategory1603511150099 = createCategory1603511150099;
