import {Entity, Column, CreateDateColumn, PrimaryColumn} from "typeorm";
import { v4 as uuid } from "uuid"

@Entity("usuarios")
export class Usuario{

    @PrimaryColumn()
    id: string;  
    
    @Column()
    nome: string;

    @Column()
    senha: string;

    @CreateDateColumn()
    create_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}