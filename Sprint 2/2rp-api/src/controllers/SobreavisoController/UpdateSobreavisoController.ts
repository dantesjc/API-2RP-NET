import { Request, Response } from "express";
import { UpdateSobreavisoService } from "../../services/SobreavisoService/UpdateSobreavisoService";

export class UpdateSobreavisoController {
    async handle(request: Request, response: Response) {  
        const { id } = request.params;
        const {codverba, dia, datainicio, datafim, status} = request.body;
        
        const service = new UpdateSobreavisoService;

        const result = await service.execute({id, codverba, dia, datainicio, datafim, status});

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }
        
        return response.json(result);
    }
}