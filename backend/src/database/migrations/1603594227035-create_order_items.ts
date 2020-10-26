import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrderItems1603594227035 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
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
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('order_items');
    }

}
