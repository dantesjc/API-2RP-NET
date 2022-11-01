import { Request, Response } from "express";
import { GetAllHorasextrasService } from "../../services/HorasextrasService/GetAllHorasextrasService";

export class GetAllHorasextrasController {
    async handle(request: Request, response: Response) {
        const service = new GetAllHorasextrasService

        const sobreavisos = await service.execute();

        return response.json(sobreavisos);
    }
}