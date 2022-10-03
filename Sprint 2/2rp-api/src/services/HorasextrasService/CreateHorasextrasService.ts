import { getRepository } from "typeorm";
import {Horasextras} from "../../entities/Horasextras";

type HorasextrasRequest = {
    codverba: string;
    dia: string;
    datainicio: string;
    datafim: string;
    status: string;
}

export class CreateHorasextrasService {
    async execute({codverba, dia, datainicio, datafim, status}: HorasextrasRequest): Promise<Horasextras | Error> {
        const repo = getRepository(Horasextras);        

        const horasextras = repo.create({
            codverba,            
            dia,
            datainicio,
            datafim,
            status
        })

        await repo.save(horasextras);

        return horasextras;
    }
}