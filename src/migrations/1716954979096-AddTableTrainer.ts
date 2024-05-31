import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class AddTableTrainer1716954979096 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tbl_trainers',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isNullable: false,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'string',
            isNullable: false,
          },
          {
            name: 'generation',
            type: 'number',
            isNullable: false,
          },
          //   {
          //     name: 'pokemonId',
          //     type: 'bigInt',
          //     isNullable: true,
          //   },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tbl_trainers');
  }
}
