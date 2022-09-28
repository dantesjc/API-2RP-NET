import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController";

const routes = Router();

routes.get('/getUserById', UsuarioController.findById)
routes.get('/getAllUsers', UsuarioController.getAll)
routes.post('/createUser', UsuarioController.create)
routes.put('/updateUser', UsuarioController.update)
routes.delete('/deleteUser', UsuarioController.delete)

export default routes
