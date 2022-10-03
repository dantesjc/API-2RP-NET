import { getRepository } from "typeorm";
import { Horasextras } from "../../entities/Horasextras";

export class GetAllHorasextrasService{
    async execute() {
        const repo = getRepository(Horasextras);

        const horasextras = await repo.find();

        return horasextras;
    }
}