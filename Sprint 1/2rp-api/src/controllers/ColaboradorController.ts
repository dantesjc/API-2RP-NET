import { AppDataSource } from "../app-data-source"
import { Request, Response } from 'express'
import { Colaborador } from "../entity/Colaborador"

class ColaboradorController{

    // public async list(req: Request, res: Response): Promise<Response> {
    //     const { id_colaborador } = req.body
    //     const usuario: any = await AppDataSource.manager.findOneBy(Colaborador, { id: id_colaborador }).catch((e) => {
    //         return { error: "Identificador inválido" }
    //     })

    //     if (colaborador && colaborador.id) {
    //         const repo = AppDataSource.getRepository(Gasto)
    //         const gastos = await repo.find({
    //             /*relations:{
    //                 colaborador:true
    //             },*/
    //             where: {
    //                 colaborador: {
    //                     id: id_colaborador
    //                 }
    //             },
    //             order: {
    //                 descricao: 'asc'
    //             }
    //         })
    //         return res.json(gastos)
    //     }
    //     else if (!usuario) {
    //         return res.json({ error: "Usuário não identificado" })
    //     }
    //     else {
    //         return res.json(usuario)
    //     }
    // }


    // public async create(req: Request, res: Response): Promise<Response> {
    //     const { idusuario, descricao, valor } = req.body
    //     const usuario: any = await AppDataSource.manager.findOneBy(Usuario, { id: idusuario }).catch((e) => {
    //         return { error: "Identificador inválido" }
    //     })

    //     if (usuario && usuario.id) {
    //         const gasto = new Gasto()
    //         gasto.usuario = usuario
    //         gasto.descricao = descricao
    //         gasto.valor = parseFloat(valor)
    //         await AppDataSource.manager.save(Gasto, gasto)
    //         res.json(gasto)
    //     }
    //     else {
    //         return res.json(usuario)
    //     }
    // }

}

export default new ColaboradorController()