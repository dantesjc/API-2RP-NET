import { Request, Response } from "express";
import { GetAllSobreavisosService } from "../../services/SobreavisoService/GetAllSobreavisoService";

export class GetAllSobreavisosController {
    async handle(request: Request, response: Response) {
        const service = new GetAllSobreavisosService

        const sobreavisos = await service.execute();

        return response.json(sobreavisos);
    }
}