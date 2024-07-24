import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class AddTablePokemonType1721705844964 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'rel_pokemonType',
        columns: [
          {
            name: 'pokemonTypeId',
            type: 'bigint',
            isPrimary: true,
          },
          {
            name: 'pokemonId',
            type: 'bigint',
          },
          {
            name: 'typeid',
            type: 'bigint',
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
            isNullable: true,
          },
          {
            name: 'updatedDate',
            type: 'datetime2',
            isNullable: true,
          },
        ],
      }),
    );

    await queryRunner.createForeignKeys('rel_pokemonType', [
      new TableForeignKey({
        columnNames: ['pokemonId'],
        referencedTableName: 'tbl_pokemon',
        referencedColumnNames: ['pokemonId'],
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['typeId'],
        referencedTableName: 'tbl_type',
        referencedColumnNames: ['typeId'],
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('rel_pokemonType');
  }
}
