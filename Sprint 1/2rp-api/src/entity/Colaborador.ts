import { perfil } from './../enum/perfil-enum';
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({ name: "colaborador" }) // Defini o nome da tabela 
export class Colaborador {

    @PrimaryGeneratedColumn("uuid") // defini atributo como chave primária
    id_colab: number

    @Column({ nullable: false, unique: true }) //Nullable = não pode estar vazia 
    matricula: number

    @Column({ nullable: false, unique: true }) // unique = o valor não pode repetir em outros itens
    senha: number

    @Column({ length: 70, nullable: false }) // length = tamanho maximo do item
    nome: string

    @Column({ nullable: false  })
    perfil: string

}
