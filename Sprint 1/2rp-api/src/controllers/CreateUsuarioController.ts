import { Request, Response } from "express";
import { CreateUsuarioService } from "../services/CreateUsuarioService";

export class CreateUsuarioController {
    async handle(request: Request, response: Response){
        const {nome, senha} = request.body;

        const service = new CreateUsuarioService();

        const result = await service.execute({nome, senha});

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}