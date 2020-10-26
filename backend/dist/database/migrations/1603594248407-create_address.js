"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAddress1603594248407 = void 0;
const typeorm_1 = require("typeorm");
class createAddress1603594248407 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'addresses',
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
                    name: 'street_name',
                    type: 'varchar'
                },
                {
                    name: 'street_number',
                    type: 'varchar'
                },
                {
                    name: 'zipcode',
                    type: 'varchar'
                },
                {
                    name: 'city',
                    type: 'varchar'
                },
                {
                    name: 'country',
                    type: 'varchar'
                },
                {
                    name: 'neighborhood',
                    type: 'varchar'
                },
                {
                    name: 'client_id',
                    type: 'integer'
                }
            ],
            foreignKeys: [
                {
                    name: 'AddressClient',
                    columnNames: ['client_id'],
                    referencedTableName: 'clients',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                },
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('addresses');
    }
}
exports.createAddress1603594248407 = createAddress1603594248407;
