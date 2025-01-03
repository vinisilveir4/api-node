import * as create from "./Create";
import * as getAll from "./GetAll";
import * as getById from "./GetById";
import * as deleteById from "./DeleteById";
import * as updateById from "./UpdateById";

// centraliza todos os metodos do controller em um unico objeto
export const CidadesController = {
    ...create,
    ...getAll,
    ...getById,
    ...deleteById,
    ...updateById
};