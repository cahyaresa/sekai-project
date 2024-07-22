import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class AddTablePokemonEggGroups1721378442860
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'rel_pokemonEggGroup',
        columns: [
          {
            name: 'pokemonEgggroupid',
            type: 'bigint',
            isPrimary: true,
          },
          {
            name: 'pokemonId',
            type: 'bigint',
            isNullable: true,
          },
          {
            name: 'eggGroupsId',
            type: 'bigint',
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

    await queryRunner.createForeignKeys('rel_pokemonEggGroup', [
      new TableForeignKey({
        columnNames: ['pokemonId'],
        referencedTableName: 'tbl_pokemon',
        referencedColumnNames: ['pokemonId'],
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['eggGroupsId'],
        referencedTableName: 'tbl_eggGrpups',
        referencedColumnNames: ['eggGroupsId'],
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('rel_pokemonEggGroup');
  }
}
