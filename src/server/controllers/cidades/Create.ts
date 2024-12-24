import { Request, Response } from "express";

interface ICidade {
    nome: String;
}

// metodo create do controller de cidades

//request recebe parametros de tipagem
const create = (req: Request, res: Response) => {
    // const data: ICidade = req.body;

    res.send(data.nome);
}

export { create };