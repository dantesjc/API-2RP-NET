import { Request, Response } from "express";
import { CreateHorasextrasService } from "../../services/HorasextrasService/CreateHorasextrasService";

export class CreateHorasextrasController {
    async handle(request: Request, response: Response){
        const {codverba, dia, datainicio, datafim, status} = request.body;

        const service = new CreateHorasextrasService();

        const result = await service.execute({codverba, dia, datainicio, datafim, status});

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}