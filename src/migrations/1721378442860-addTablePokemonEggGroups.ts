import { MigrationInterface, QueryRunner, Table } from 'typeorm';

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
            name: 'eggGroups',
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('rel_pokemonEggGroup');
  }
}
