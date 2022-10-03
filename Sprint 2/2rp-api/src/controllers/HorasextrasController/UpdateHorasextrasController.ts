import { Request, Response } from "express";
import { UpdateHorasextrasService } from "../../services/HorasextrasService/UpdateHorasextrasService";

export class UpdateHorasextrasController {
    async handle(request: Request, response: Response) {  
        const { id } = request.params;
        const {codverba, dia, datainicio, datafim, status} = request.body;
        
        const service = new UpdateHorasextrasService;

        const result = await service.execute({id, codverba, dia, datainicio, datafim, status});

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }
        
        return response.json(result);
    }
}