"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStatus1603594256460 = void 0;
const typeorm_1 = require("typeorm");
class createStatus1603594256460 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'status',
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
                    name: 'label',
                    type: 'varchar'
                },
                {
                    name: 'value',
                    type: 'integer'
                }
            ]
        }));
    }
    async down(queryRunner) {
    }
}
exports.createStatus1603594256460 = createStatus1603594256460;
