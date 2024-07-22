import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class AddTableAbilities1719290694260 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tbl_abilities',
        columns: [
          {
            name: 'abilitiesId',
            type: 'bigint',
            isPrimary: true,
            isNullable: false,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'abilities',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'createdBy',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'updatedBy',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'createdDate',
            type: 'datetime2',
          },
          {
            name: 'updatedDate',
            type: 'datetime2',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tbl_abilities');
  }
}
