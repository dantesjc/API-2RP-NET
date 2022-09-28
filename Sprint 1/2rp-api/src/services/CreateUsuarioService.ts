import { getRepository } from "typeorm";
import {Usuario} from "../entity/Usuario";

type UsuarioRequest = {
    nome: string;
    senha: string;
}

export class CreateUsuarioService {
    async execute({nome, senha}: UsuarioRequest): Promise<Usuario | Error> {
        const repo = getRepository(Usuario);

        // SELECT * FROM usuarios WHERE nome = "nome"
        if(await repo.findOneBy({nome})) {
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