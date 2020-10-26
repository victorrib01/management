"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderItems1603594227035 = void 0;
const typeorm_1 = require("typeorm");
class createOrderItems1603594227035 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'order_items',
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
                    name: 'order_id',
                    type: 'integer'
                },
                {
                    name: 'product_id',
                    type: 'integer'
                },
                {
                    name: 'quantity',
                    type: 'integer'
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('order_items');
    }
}
exports.createOrderItems1603594227035 = createOrderItems1603594227035;
