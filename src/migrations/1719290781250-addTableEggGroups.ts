import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class AddTableEggGroups1719290781250 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tbl_eggGrpups',
        columns: [
          {
            name: 'eggGroupsId',
            type: 'bigint',
            isPrimary: true,
            isNullable: false,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'eggGroups',
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
    await queryRunner.dropTable('tbl_eggGrpups');
  }
}
