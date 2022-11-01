import { Router } from "express";

import { CreateSobreavisoController } from "./controllers/SobreavisoController/CreateSobreavisoController";
import { DeleteSobreavisoController } from "./controllers/SobreavisoController/DeleteSobreavisoController";
import { GetAllSobreavisosController } from "./controllers/SobreavisoController/GetAllSobreavisosController";
import { UpdateSobreavisoController } from "./controllers/SobreavisoController/UpdateSobreavisoController";

import { CreateHorasextrasController } from "./controllers/HorasextrasController/CreateHorasextrasController";
import { DeleteHorasextrasController } from "./controllers/HorasextrasController/DeleteHorasextrasController";
import { GetAllHorasextrasController } from "./controllers/HorasextrasController/GetAllHorasextrasController";
import { UpdateHorasextrasController } from "./controllers/HorasextrasController/UpdateHorasextrasController";

const routes = Router();

routes.post("/sobreavisos", new CreateSobreavisoController().handle);
routes.get("/sobreavisos", new GetAllSobreavisosController().handle);
routes.delete("/sobreavisos/:id", new DeleteSobreavisoController().handle);
routes.put("/sobreavisos/:id", new UpdateSobreavisoController().handle);

routes.post("/horasextras", new CreateHorasextrasController().handle);
routes.get("/horasextras", new GetAllHorasextrasController().handle);
routes.delete("/horasextras/:id", new DeleteHorasextrasController().handle);
routes.put("/horasextras/:id", new UpdateHorasextrasController().handle);

export {routes}