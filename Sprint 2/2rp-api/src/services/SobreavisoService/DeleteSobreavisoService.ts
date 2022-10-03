import { getRepository } from "typeorm";
import { Sobreaviso } from "../../entities/Sobreaviso";


export class DeleteSobreavisoService {
    async execute(id: string) {
        const repo = getRepository(Sobreaviso);      
        
        if(!await repo.findOne(id)) {
            return new Error("Sobreaviso não existe");
        }

        await repo.delete(id);
    }
}