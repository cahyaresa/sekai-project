import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class AddTablePokemonAbilities1721704109459
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'rel_pokemonAbilities',
        columns: [
          {
            name: 'pokemonAbilitiesid',
            type: 'bigint',
            isPrimary: true,
          },
          {
            name: 'pokemonId',
            type: 'bigint',
          },
          {
            name: 'abilitiesId',
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
          },
          {
            name: 'updatedDate',
            type: 'datetime2',
          },
        ],
      }),
    );

    await queryRunner.createForeignKeys('rel_pokemonAbilities', [
      new TableForeignKey({
        columnNames: ['pokemonId'],
        referencedTableName: 'tbl_pokemon',
        referencedColumnNames: ['pokemonId'],
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['abilitiesId'],
        referencedTableName: 'tbl_abilities',
        referencedColumnNames: ['abilitiesId'],
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('rel_pokemonAbilities');
  }
}
