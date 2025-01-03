import { Request, Response } from "express";
import * as yup from "yup";
import { StatusCodes } from "http-status-codes";
import { validation } from "../../shared/middleware";

interface IQueryProps {
    page?: number;
    limit?: number;
    filter?: string;
}

const getAllValidator = validation({
    query: yup.object().shape({
        page: yup.number().optional().min(1),
        limit: yup.number().optional().min(1),
        filter: yup.string().optional()
    })
});

const getAll = async (req: Request<any, any, any, IQueryProps>, res: Response) => {

    const query = req.query;


    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Não implementado")
};

export { getAll, getAllValidator };