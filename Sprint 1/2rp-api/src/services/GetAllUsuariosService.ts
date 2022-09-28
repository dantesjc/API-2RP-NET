import { getRepository } from "typeorm";
import { Usuario } from "../entity/Usuario";

export class GetAllUsuariosService{
    async execute() {
        const repo = getRepository(Usuario);

        const usuarios = await repo.find();

        return usuarios;
    }
}