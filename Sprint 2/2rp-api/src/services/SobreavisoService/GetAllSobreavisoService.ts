import { getRepository } from "typeorm";
import { Sobreaviso } from "../../entities/Sobreaviso";

export class GetAllSobreavisosService{
    async execute() {
        const repo = getRepository(Sobreaviso);

        const usuarios = await repo.find();

        return usuarios;
    }
}