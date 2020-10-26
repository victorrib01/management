import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrder1603511141227 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
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
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orders');
    }

}
