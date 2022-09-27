import { getRepository } from "typeorm";
import {Usuario} from "../entities/Usuario";

type UsuarioRequest = {
    nome: string;
    senha: string;
}

export class CreateUsuarioService {
    async execute({nome, senha}: UsuarioRequest): Promise<Usuario | Error> {
        const repo = getRepository(Usuario);

        // SELECT * FROM usuarios WHERE nome = "nome"
        if(await repo.findOne({nome})) {
            return new Error("Usuario já existe");
        }

        const usuario = repo.create({
            nome,
            senha
        })

        await repo.save(usuario);

        return usuario;
    }
}