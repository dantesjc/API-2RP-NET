import { Router, Request, Response } from "express"
import colaborador from './colaborador'

const routes = Router()

routes.use("/colaborador", colaborador)

//aceita qualquer método HTTP ou URL
routes.use( (req:Request,res:Response) => res.json({error:"Requisição desconhecida"}) )

export default routes
