import { Request, RequestHandler, Response } from "express";
import * as yup from "yup";
import { StatusCodes } from "http-status-codes";
import { validation } from "../../shared/middleware";

// interface do objeto cidade
interface ICidade {
    nome: string;
    // estado?: String // ? não obrigatório
    estado: string
};

// schema de validação
// yup.ObjectSchema<ICidade> especifica os atributos e tipos

// createValidator é um middleware que valida a entrada de dados chamando validation
// que recebe o schema generico e retorna o requesthandler responsavel pela validação
// recebe como parametro um record(objeto) onde a chave é o tipo de validação (body, header) 
// e o valor o schema do yup
const createValidator = validation({
    body: yup.object().shape({
        nome: yup.string().required().min(3),
        estado: yup.string().required()
    }),
    query: yup.object().shape({
        filter: yup.string().required().min(3),
    })
});

//request recebe parametros de tipagem onde o terceiro especifica o tipo do body
const create = async (req: Request<any, any, ICidade>, res: Response) => {

    // body agora é do tipo ICidade
    console.log("passei na validação");

};

export { create, createValidator };