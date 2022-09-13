import { AppDataSource } from "../app-data-source"
import { Request, Response } from 'express'
import { Produto } from '../entity/Produto'

class ProdutoController {
  public async find(req: Request, res: Response): Promise<Response> {
    const { qtd, valor } = req.body
    const produto = await AppDataSource.manager.findOneBy(Produto, { qtd, valor })
    if (produto)
      return res.json(produto)
    return res.json({ error: "Dados inválidos" })
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { qtd, valor } = req.body
    const produto = await AppDataSource.manager.save(Produto, { qtd, valor }).catch((e) => {
      // testa se o e-qtd é repetido
      if (/(qtd)[\s\S]+(already exists)/.test(e.detail)) {
        return { error: 'e-qtd já existe' }
      }
      return e
    })

    return res.json(produto)
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id, qtd, valor } = req.body
    const produto: any = await AppDataSource.manager.findOneBy(Produto, { id }).catch((e) => {
      return { error: "Identificador inválido" }
    })
    if (produto && produto.id) {
      produto.qtd = qtd
      produto.valor = valor
      const r = await AppDataSource.manager.save(Produto, produto).catch((e) => {
        // testa se o e-qtd é repetido
        if (/(qtd)[\s\S]+(already exists)/.test(e.detail)) {
          return ({ error: 'e-qtd já existe' })
        }
        return e
      })
      return res.json(r)
    }
    else if (produto && produto.error) {
      return res.json(produto)
    }
    else {
      return res.json({ error: "Usuário não localizado" })
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.body
    const produto: any = await AppDataSource.manager.findOneBy(Produto, { id }).catch((e) => {
      return { error: "Identificador inválido" }
    })
    if (produto && produto.id) {
      const r = await AppDataSource.manager.remove(Produto, produto).catch((e) => e.message)
      return res.json(r)
    }
    else if (produto && produto.error) {
      return res.json(produto)
    }
    else {
      return res.json({ error: "Usuário não localizado" })
    }
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const produtos = await AppDataSource.manager.find(Produto)

    return res.json(produtos)
  }
}

export default new ProdutoController()