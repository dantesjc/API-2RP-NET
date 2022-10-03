import { Request, Response } from "express";
import { DeleteSobreavisoService } from "../../services/SobreavisoService/DeleteSobreavisoService";

export class DeleteSobreavisoController {
    async handle(request: Request, response: Response) {        
        const { id } = request.params;

        const service = new DeleteSobreavisoService();

        const result = await service.execute(id);

        if (result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.status(204).end();
    }
}