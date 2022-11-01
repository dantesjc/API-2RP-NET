import { getRepository } from "typeorm";
import {Sobreaviso} from "../../entities/Sobreaviso";

type SobreavisoRequest = {
    codverba: string;
    dia: string;
    datainicio: string;
    datafim: string;
    status: string;
}

export class CreateSobreavisoService {
    async execute({codverba, dia, datainicio, datafim, status}: SobreavisoRequest): Promise<Sobreaviso | Error> {
        const repo = getRepository(Sobreaviso);        

        const sobreaviso = repo.create({
            codverba,            
            dia,
            datainicio,
            datafim,
            status
        })

        await repo.save(sobreaviso);

        return sobreaviso;
    }
}