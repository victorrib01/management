"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClients1603495069728 = void 0;
const typeorm_1 = require("typeorm");
class createClients1603495069728 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'clients',
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
                    name: 'doc',
                    type: 'varchar'
                },
                {
                    name: 'phone',
                    type: 'varchar'
                },
                {
                    name: 'facebook',
                    type: 'varchar'
                },
                {
                    name: 'instagram',
                    type: 'varchar'
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('clients');
    }
}
exports.createClients1603495069728 = createClients1603495069728;
