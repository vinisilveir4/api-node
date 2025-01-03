import { Request, Response } from "express";
import * as yup from "yup";
import { StatusCodes } from "http-status-codes";
import { validation } from "../../shared/middleware";


interface ICidade {
    nome: string;
    // estado?: String // ? não obrigatório
    estado: string;
};

interface IParamProps {
    id?: number;
}

const updateValidator = validation({
    body: yup.object().shape({
        nome: yup.string().required().min(3),
        estado: yup.string().required()
    }),
      params: yup.object().shape({
            id: yup.number().integer().required().min(1)
        })
});

//request recebe parametros de tipagem onde o terceiro especifica o tipo do body
const updateById = async (req: Request<IParamProps, any, ICidade>, res: Response) => {

    // body agora é do tipo ICidade
    console.log("passei na validação");

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Não implementado")

};

export { updateById, updateValidator };