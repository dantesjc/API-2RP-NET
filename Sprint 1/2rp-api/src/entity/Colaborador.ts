import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({ name: "colaborador" })
export class Colaborador {
    @PrimaryGeneratedColumn("uuid")
    id_colaborador: string

    @Column({ nullable: false, unique: true })
    matricula: number

    @Column({ nullable: false, unique: true })
    senha: number

    @Column({ length: 70, nullable: false, unique: true })
    nome: string

    @Column({ nullable: false, select: false })
    perfil: string
}
