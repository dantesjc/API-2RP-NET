import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name:"produtos"})
export class Produto {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({nullable: false})
    qtd: number

    @Column({nullable: false,  select: false})
    valor: number
}
