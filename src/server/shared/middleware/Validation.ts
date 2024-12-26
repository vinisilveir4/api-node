import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { ObjectSchema, ValidationError } from "yup";

type TProperty = ("body" | "params" | "query" | "header");

type TSchemas = Record<TProperty, ObjectSchema<any>>;

// tipo RequestHandler do express é uma função que trabalha em cima da requisição
// recebendo o request response e next 
// o next é uma função que quando chamada passa para o proximo handler da fila definido na rota
// recebe como parametro o TSchemas, objeto de schemas marcado com Partial assim os atributos não são todos 
// obrigatórios
interface IValidation {
    (schemas: Partial<TSchemas>): RequestHandler;
};

const validation: IValidation = (schemas) => async (req, res, next) => {
    
        // let validatedData: ICidade | undefined = undefined;

        const errorsResult: Record<string, Record<string, string>> = {};
        
        Object.entries(schemas).forEach(([key, schema]) => {
            try {
                // validatedData = await schema.validate(req.body, { abortEarly: false });
                // req[field] acesso por atributo, mesmo que req.body
                // validateSync função assincrona do yup 
                schema.validateSync(req[key as TProperty], { abortEarly: false });

                console.log(req[key as TProperty]);
                // return next();
            } catch(error) {
                const yupError = error as ValidationError;
                const errors: Record<string, string> = {};
        
                yupError.inner.forEach(err => {
                    if(!err.path) return;
        
                    errors[err.path] = err.message;
                });

                errorsResult[key] = errors;
                // return;
                // forma simplificada mas nao mapeia o path atributo com erro
                // if(error instanceof yup.ValidationError)
                //     res.status(StatusCodes.BAD_REQUEST).json({ errors: error.errors})
            }
        })

        if(Object.entries(errorsResult).length != 0) {
            res.status(StatusCodes.BAD_REQUEST).json({
                errors: errorsResult
            });

            return;
        } 

        return next();
};

export { validation };