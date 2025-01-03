import { Request, Response } from "express";
import * as yup from "yup";
import { StatusCodes } from "http-status-codes";
import { validation } from "../../shared/middleware";

interface IParamProps {
    id?: number;
}

const getByIdValidator = validation({
    params: yup.object().shape({
        id: yup.number().integer().required().min(1)
    })
});

const getById = async (req: Request<IParamProps>, res: Response) => {

    const query = req.params.id;

console.log(query)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Não implementado")
};

export { getById, getByIdValidator };