import { AppDataSource } from "../app-data-source"
import { Request, Response } from 'express'
import { Usuario } from '../entity/Usuario'

class UsuarioController {
  // usuario/getUserById
  public async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.body
    const usuario = await AppDataSource.manager.findOneBy(Usuario, { id })
    if (usuario)
      return res.json(usuario)
    return res.json({ error: "Dados inválidos" })
  }

  // usuario/getAllUsers
  public async getAll(req: Request, res: Response): Promise<Response> {
    const usuarios = await AppDataSource.manager.find(Usuario)
    if (usuarios)
      return res.json(usuarios)
    return res.json({ error: "Dados inválidos" })
  }

  // usuario/createUser
  public async create(req: Request, res: Response): Promise<Response> {
    const { nome, senha, create_at } = req.body
    const usuario = await AppDataSource.manager.save(Usuario, { nome, senha, create_at }).catch((e) => {
      return e
    })

    return res.json(usuario)
  }
  // usuario/updateUser
  public async update(req: Request, res: Response): Promise<Response> {
    const { id, nome, senha } = req.body
    const usuario: any = await AppDataSource.manager.findOneBy(Usuario, { id }).catch((e) => {
      return { error: "Identificador inválido" }
    })
    if (usuario && usuario.id) {
      usuario.nome = nome
      usuario.senha = senha
      const r = await AppDataSource.manager.save(Usuario, usuario).catch((e) => {
        return e
      })
      return res.json(r)
    }
    else if (usuario && usuario.error) {
      return res.json(usuario)
    }
    else {
      return res.json({ error: "Usuário não localizado" })
    }
  }
  // usuario/deleteUser
  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.body
    const usuario: any = await AppDataSource.manager.findOneBy(Usuario, { id }).catch((e) => {
      return { error: "Identificador inválido" }
    })
    if (usuario && usuario.id) {
      const r = await AppDataSource.manager.remove(Usuario, usuario).catch((e) => e.message)
      return res.json(r)
    }
    else if (usuario && usuario.error) {
      return res.json(usuario)
    }
    else {
      return res.json({ error: "Usuário não localizado" })
    }
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const usuarios = await AppDataSource.manager.find(Usuario)

    return res.json(usuarios)
  }
}

export default new UsuarioController()