import { Router } from "express";

import { CreateSobreavisoController } from "./controllers/SobreavisoController/CreateSobreavisoController";
import { DeleteSobreavisoController } from "./controllers/SobreavisoController/DeleteSobreavisoController";
import { GetAllSobreavisosController } from "./controllers/SobreavisoController/GetAllSobreavisosController";
import { UpdateSobreavisoController } from "./controllers/SobreavisoController/UpdateSobreavisoController";

const routes = Router();

routes.post("/sobreavisos", new CreateSobreavisoController().handle);
routes.get("/sobreavisos", new GetAllSobreavisosController().handle);
routes.delete("/sobreavisos/:id", new DeleteSobreavisoController().handle);
routes.put("/sobreavisos/:id", new UpdateSobreavisoController().handle);

export {routes}