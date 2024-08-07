import {
  MigrationInterface,
  QueryRunner,
  Table,
  //   TableForeignKey,
} from 'typeorm';

export class AddTablePokemon1718338430706 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tbl_pokemon',
        columns: [
          {
            name: 'pokemonId',
            type: 'bigint',
            isPrimary: true,
            isNullable: false,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'pokedex',
            type: 'bigint',
            isNullable: false,
          },
          //   {
          //     name: 'type1id',
          //     type: 'bigint',
          //     isNullable: false,
          //   },
          //   {
          //     name: 'type2id',
          //     type: 'bigint',
          //     isNullable: true,
          //   },
          //   {
          //     name: 'speciesid',
          //     type: 'bigint',
          //     isNullable: true,
          //   },
          {
            name: 'height',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'weight',
            type: 'varchar',
            isNullable: true,
          },
          //   {
          //     name: 'abilities1id',
          //     type: 'bigint',
          //     isNullable: true,
          //   },
          //   {
          //     name: 'abilities2id',
          //     type: 'bigint',
          //     isNullable: true,
          //   },
          //   {
          //     name: 'abilities3id',
          //     type: 'bigint',
          //     isNullable: true,
          //   },
          {
            name: 'evYield',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'catchRate',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'baseFriendship',
            type: 'bigint',
            isNullable: true,
          },
          {
            name: 'baseExp',
            type: 'bigint',
            isNullable: true,
          },
          {
            name: 'growthRate',
            type: 'varchar',
            isNullable: true,
          },
          //   {
          //     name: 'eggGroups1id',
          //     type: 'bigint',
          //     isNullable: true,
          //   },
          //   {
          //     name: 'eggGroups2id',
          //     type: 'bigint',
          //     isNullable: true,
          //   },
          {
            name: 'gender',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'eggCycles',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'hpBase',
            type: 'bigint',
            isNullable: true,
          },
          {
            name: 'hpMin',
            type: 'bigint',
            isNullable: true,
          },
          {
            name: 'hpMax',
            type: 'bigint',
            isNullable: true,
          },
          {
            name: 'attackBase',
            type: 'bigint',
            isNullable: true,
          },
          {
            name: 'attackMin',
            type: 'bigint',
            isNullable: true,
          },
          {
            name: 'attackMax',
            type: 'bigint',
            isNullable: true,
          },
          {
            name: 'defenseBase',
            type: 'bigint',
            isNullable: true,
          },
          {
            name: 'defenseMin',
            type: 'bigint',
            isNullable: true,
          },
          {
            name: 'defenseMax',
            type: 'bigint',
            isNullable: true,
          },
          {
            name: 'specialAttackBase',
            type: 'bigint',
            isNullable: true,
          },
          {
            name: 'specialAttackMin',
            type: 'bigint',
            isNullable: true,
          },
          {
            name: 'specialAttackMax',
            type: 'bigint',
            isNullable: true,
          },
          {
            name: 'specialDefenseBase',
            type: 'bigint',
            isNullable: true,
          },
          {
            name: 'specialDefenseMin',
            type: 'bigint',
            isNullable: true,
          },
          {
            name: 'specialDefenseMax',
            type: 'bigint',
            isNullable: true,
          },
          {
            name: 'speedBase',
            type: 'bigint',
            isNullable: true,
          },
          {
            name: 'speedMin',
            type: 'bigint',
            isNullable: true,
          },
          {
            name: 'speedMax',
            type: 'bigint',
            isNullable: true,
          },
          {
            name: 'sprite',
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

    // await queryRunner.createForeignKeys('tbl_pokemon', [
    //   new TableForeignKey({
    //     columnNames: ['type1id'],
    //     referencedTableName: 'tbl_pokemonType',
    //     referencedColumnNames: ['typeId'],
    //     onUpdate: 'NO ACTION',
    //     onDelete: 'NO ACTION',
    //   }),
    //   new TableForeignKey({
    //     columnNames: ['type2id'],
    //     referencedTableName: 'tbl_pokemonType',
    //     referencedColumnNames: ['typeId'],
    //     onUpdate: 'NO ACTION',
    //     onDelete: 'NO ACTION',
    //   }),
    //   new TableForeignKey({
    //     columnNames: ['speciesid'],
    //     referencedTableName: 'tbl_pokemonSpecies',
    //     referencedColumnNames: ['speciesId'],
    //     onUpdate: 'CASCADE',
    //     onDelete: 'CASCADE',
    //   }),
    //   new TableForeignKey({
    //     columnNames: ['abilities1id'],
    //     referencedTableName: 'tbl_pokemonAbilities',
    //     referencedColumnNames: ['abilitiesId'],
    //     onUpdate: 'NO ACTION',
    //     onDelete: 'NO ACTION',
    //   }),
    //   new TableForeignKey({
    //     columnNames: ['abilities2id'],
    //     referencedTableName: 'tbl_pokemonAbilities',
    //     referencedColumnNames: ['abilitiesId'],
    //     onUpdate: 'NO ACTION',
    //     onDelete: 'NO ACTION',
    //   }),
    //   new TableForeignKey({
    //     columnNames: ['abilities3id'],
    //     referencedTableName: 'tbl_pokemonAbilities',
    //     referencedColumnNames: ['abilitiesId'],
    //     onUpdate: 'NO ACTION',
    //     onDelete: 'NO ACTION',
    //   }),
    //   new TableForeignKey({
    //     columnNames: ['eggGroups1id'],
    //     referencedTableName: 'tbl_eggGrpups',
    //     referencedColumnNames: ['eggGroupsId'],
    //     onUpdate: 'NO ACTION',
    //     onDelete: 'NO ACTION',
    //   }),
    //   new TableForeignKey({
    //     columnNames: ['eggGroups2id'],
    //     referencedTableName: 'tbl_eggGrpups',
    //     referencedColumnNames: ['eggGroupsId'],
    //     onUpdate: 'NO ACTION',
    //     onDelete: 'NO ACTION',
    //   }),
    // ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tbl_pokemon');
  }
}
