import { getRepository } from "typeorm";
import { Horasextras } from "../../entities/Horasextras";

type HorasextrasUpdateRequest = {
    id: string;
    codverba: string;
    dia: string;
    datainicio: string;
    datafim: string;
    status: string;
}

export class UpdateHorasextrasService{
    async execute({id, codverba, dia, datainicio, datafim, status}: HorasextrasUpdateRequest) {
        const repo = getRepository(Horasextras);

        const horasextras = await repo.findOne(id);

        if (!horasextras){
            return new Error("Hora-extra não existe");
        }   
        
        horasextras.codverba = codverba;
        horasextras.dia = dia;
        horasextras.datainicio = datainicio;
        horasextras.datafim = datafim;
        horasextras.status = status;

        await repo.save(horasextras);

        return horasextras;
    }    
}