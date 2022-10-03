import { Request, Response } from "express";
import { DeleteHorasextrasService } from "../../services/HorasextrasService/DeleteHorasextrasService";

export class DeleteHorasextrasController {
    async handle(request: Request, response: Response) {        
        const { id } = request.params;

        const service = new DeleteHorasextrasService();

        const result = await service.execute(id);

        if (result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.status(204).end();
    }
}