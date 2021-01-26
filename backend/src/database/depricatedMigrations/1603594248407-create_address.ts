import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createAddress1603594248407 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
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
                },
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
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('addresses');
    }

}
