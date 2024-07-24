import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class AddTablePokemonSpecies1721705156008 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'rel_pokemonSpecies',
        columns: [
          {
            name: 'pokemonSpeciesId',
            type: 'bigint',
            isPrimary: true,
          },
          {
            name: 'pokemonId',
            type: 'bigint',
          },
          {
            name: 'speciesId',
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

    await queryRunner.createForeignKeys('rel_pokemonSpecies', [
      new TableForeignKey({
        columnNames: ['pokemonId'],
        referencedTableName: 'tbl_pokemon',
        referencedColumnNames: ['pokemonId'],
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['speciesId'],
        referencedTableName: 'tbl_species',
        referencedColumnNames: ['speciesId'],
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('rel_pokemonSpecies');
  }
}
