import { getRepository } from "typeorm";
import { Sobreaviso } from "../../entities/Sobreaviso";

type SobreavisoUpdateRequest = {
    id: string;
    codverba: string;
    dia: string;
    datainicio: string;
    datafim: string;
    status: string;
}

export class UpdateSobreavisoService{
    async execute({id, codverba, dia, datainicio, datafim, status}: SobreavisoUpdateRequest) {
        const repo = getRepository(Sobreaviso);

        const sobreaviso = await repo.findOne(id);

        if (!sobreaviso){
            return new Error("Sobraviso não existe");
        }   
        
        sobreaviso.codverba = codverba;
        sobreaviso.dia = dia;
        sobreaviso.datainicio = datainicio;
        sobreaviso.datafim = datafim;
        sobreaviso.status = status;

        await repo.save(sobreaviso);

        return sobreaviso;
    }    
}