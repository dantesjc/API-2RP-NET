import { getRepository } from "typeorm";
import { Sobreaviso } from "../../entities/Sobreaviso";

export class GetAllSobreavisosService{
    async execute() {
        const repo = getRepository(Sobreaviso);

        const sobreaviso = await repo.find();

        return sobreaviso;
    }
}