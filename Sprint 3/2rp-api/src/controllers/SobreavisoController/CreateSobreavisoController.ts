import { Request, Response } from "express";
import { CreateSobreavisoService } from "../../services/SobreavisoService/CreateSobreavisoService";

export class CreateSobreavisoController {
    async handle(request: Request, response: Response){
        const {codverba, dia, datainicio, datafim, status} = request.body;

        const service = new CreateSobreavisoService();

        const result = await service.execute({codverba, dia, datainicio, datafim, status});

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}