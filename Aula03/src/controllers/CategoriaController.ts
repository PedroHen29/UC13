import { RetryAgent } from "undici-types";
import { Categoria, categorias } from "../models/Categoria";
import { Response, Request } from "express";

export class CategoriaController {

    createCategoria(req: Request, res: Response){
        const {nome} = req.body

        if(!nome){
            return res.status(400).json({message: 'Nome não pode estar vazio'})
        }

        const id = categorias.length === 0 ? 1 : categorias.length +1

        const novaCategoria = new Categoria(id, nome)
        categorias.push(novaCategoria)

        return res.status(200).json({message: 'Categoria adicionada com sucesso'})
    }

    getCategorias(req: Request, res: Response){
        return res.status(200).json(categorias)
    }

    updateCategoria(req: Request, res: Response){
        const {nome} = req.body
        const id = Number(req.body.params)

        if(!nome){
            return res.status(404).json({message: 'Nome é obrigatorio'})
        }

        const categoria = categorias.find((categoria) => categoria.id === id)

        if(!categoria){
            return res.status(404).json({message: 'Categoria não encontrado'})
        }

        categoria.id === id
        categoria.nome === nome

        return res.status(200).json({message: 'Categoria atualizada com sucesso'})
    }

    deletCategoria(req: Request, res: Response){
        const {nome} = req.body
        const id = req.body.params

        if(!id){
            return res.status(404).json({message: 'Id não encontrado'})
        }

        const categoriaIndex = categorias.findIndex((p) => p.id === id)
        if(categoriaIndex === -1){
            return res.status(404).json({message: 'Produto não encontrado'})
        }
        categorias.splice(categoriaIndex, 1)
        return res.status(204).send()
    }
}