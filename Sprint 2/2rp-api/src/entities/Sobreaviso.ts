import {Entity, Column, CreateDateColumn, PrimaryColumn} from "typeorm";
import { v1 as uuid } from "uuid"

@Entity("sobreavisos")
export class Sobreaviso{

    @PrimaryColumn()
    id: string;
    
    @Column()
    codverba: String;
    
    @Column()
    dia: string;

    @Column()
    datainicio: string;

    @Column()
    datafim: string;
    
    @Column()
    status: string;
    
    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}