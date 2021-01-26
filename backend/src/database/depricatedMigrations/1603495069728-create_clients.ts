import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createClients1603495069728 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
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
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('clients');
    }

}
