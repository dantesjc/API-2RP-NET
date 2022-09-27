import { Colaborador } from './Colaborador';
import { status } from './../enum/status-enum';

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from "typeorm"

@Entity({ name: "horaExtra" })
export class HoraExtra {
    @PrimaryGeneratedColumn("uuid")
    id_hora_extra: number

    @Column({ nullable: false })
    verba: number

    @ManyToOne(() => Colaborador)
    @JoinColumn({name: "id_colab"}) // passa a coluna que estará fazendo a refencia
    colaborador: Colaborador; // horaExtra tem que estar ligada ao menos a um colaborador

    @Column()
    id_colab: string;

    @Column({ length: 100, nullable: false })
    justificativa: string

    @CreateDateColumn({ nullable: false }) // Coluna que aceita data
    dia: Date

    @CreateDateColumn({ nullable: false })
    inicio: Date

    @CreateDateColumn({ nullable: false })
    fim: Date

    @Column({ nullable: false })
    status: number


}
