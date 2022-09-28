import {Entity, Column, CreateDateColumn, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
import { v4 as uuid } from "uuid"

@Entity("usuarios")
export class Usuario{

    @PrimaryGeneratedColumn("uuid")
    id: string;  
    
    @Column()
    nome: string;

    @Column()
    senha: string;

    @CreateDateColumn()
    create_at: Date;
    default: () => 'NOW()' // hora atual

}