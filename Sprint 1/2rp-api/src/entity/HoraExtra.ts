import { Colaborador } from './Colaborador';
import {status } from './../enum/status-enum';

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"

@Entity({ name: "horaExtra" })
export class HoraExtra {
    @PrimaryGeneratedColumn("uuid")
    idHoraExtra: string

    @Column({ length: 70, nullable: false })
    justificativa: string

    @Column({ nullable: false })
    inicio: string

    @Column({ nullable: false })
    fim: string

    @Column({ nullable: false })
    status: number

    @ManyToOne((type) => Colaborador, { onDelete: 'CASCADE' })
    @JoinColumn({  //Defines which side of the relation contains the join column with a foreign key 
        name: "idcolab",
        referencedColumnName: "id_colaborador",
        foreignKeyConstraintName: "fk_colab_id"
    })
    colaborador: Colaborador

}
