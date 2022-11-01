import {Entity, Column, CreateDateColumn, PrimaryColumn} from "typeorm";
import { v1 as uuid } from "uuid"

@Entity("horasextras")
export class Horasextras{

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