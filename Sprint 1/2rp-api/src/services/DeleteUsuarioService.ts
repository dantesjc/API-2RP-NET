import { getRepository } from "typeorm";
import { Usuario } from "../entity/Usuario";


export class DeleteUsuarioService {
    async execute(id: string) {
        const repo = getRepository(Usuario);      
        
        if(!await repo.findOneBy({id})) {
            return new Error("Usuario não existe");
        }

        await repo.delete(id);
    }
}