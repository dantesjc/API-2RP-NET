import { Router } from "express"
import UsuarioController from "../controllers/UsuarioController"

const routes = Router()

routes.get('/', UsuarioController.list)
routes.post('/', UsuarioController.create)
routes.put('/', UsuarioController.update)
routes.delete('/', UsuarioController.delete)

export default routes