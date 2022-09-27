import { Router } from "express";
import { CreateUsuarioController } from "./../controllers/CreateUsuarioController";
import { DeleteUsuarioController } from "./../controllers/DeleteUsuarioController";
import { GetAllUsuariosController } from "./../controllers/GetAllUsuariosController";
import { UpdateUsuarioController } from "./../controllers/UpdateUsuarioController";

const routes = Router();

routes.post("/usuarios", new CreateUsuarioController().handle);
routes.get("/usuarios", new GetAllUsuariosController().handle);
routes.delete("/usuarios/:id", new DeleteUsuarioController().handle);
routes.put("/usuarios/:id", new UpdateUsuarioController().handle);

export {routes}