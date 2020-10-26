"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder1603511141227 = void 0;
const typeorm_1 = require("typeorm");
class createOrder1603511141227 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'orders',
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
                    name: 'amount',
                    type: 'varchar'
                },
                {
                    name: 'status_id',
                    type: 'integer'
                },
                {
                    name: 'client_id',
                    type: 'integer'
                },
                {
                    name: 'address_id',
                    type: 'integer'
                },
                {
                    name: 'created_at',
                    type: 'varchar'
                }
            ],
            foreignKeys: [
                {
                    name: 'OrderStatus',
                    columnNames: ['status_id'],
                    referencedTableName: 'status',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                },
                {
                    name: 'OrderClient',
                    columnNames: ['client_id'],
                    referencedTableName: 'clients',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                },
                {
                    name: 'OrderAddress',
                    columnNames: ['address_id'],
                    referencedTableName: 'addresses',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                },
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('orders');
    }
}
exports.createOrder1603511141227 = createOrder1603511141227;
