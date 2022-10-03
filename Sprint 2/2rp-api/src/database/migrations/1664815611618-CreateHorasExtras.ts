import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateHorasExtras1664815611618 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "horasextras",
                columns:[
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: 'increment',
                        isNullable: false,
                    },
                    {
                        name: "codverba",
                        type: "varchar"
                    },
                    {
                        name: "dia",
                        type: "varchar"
                    },
                    {
                        name: "datainicio",
                        type: "varchar"
                    },
                    {
                        name: "datafim",
                        type: "varchar"
                    },
                    {
                        name: "status",
                        type: "varchar"
                    }                       
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
