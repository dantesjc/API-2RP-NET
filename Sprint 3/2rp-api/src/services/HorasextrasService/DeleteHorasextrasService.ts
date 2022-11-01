import { getRepository } from "typeorm";
import { Horasextras } from "../../entities/Horasextras";


export class DeleteHorasextrasService {
    async execute(id: string) {
        const repo = getRepository(Horasextras);      
        
        if(!await repo.findOne(id)) {
            return new Error("Hora-extra não existe");
        }

        await repo.delete(id);
    }
}