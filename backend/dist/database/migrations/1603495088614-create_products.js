"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProducts1603495088614 = void 0;
const typeorm_1 = require("typeorm");
class createProducts1603495088614 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'products',
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
                {
                    name: 'price',
                    type: 'varchar'
                },
                {
                    name: 'category_id',
                    type: 'integer'
                },
                {
                    name: 'stock',
                    type: 'integer'
                },
            ],
            foreignKeys: [
                {
                    name: 'ProductCategory',
                    columnNames: ['category_id'],
                    referencedTableName: 'categories',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('products');
    }
}
exports.createProducts1603495088614 = createProducts1603495088614;
